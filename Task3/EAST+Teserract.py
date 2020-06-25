#!/usr/bin/env python
# coding: utf-8

# In[1]:


get_ipython().system('pip install imutils')
get_ipython().system('pip install pytesseract')


# In[2]:


#reference and models to be downloaded from here  https://www.pyimagesearch.com/2018/08/20/opencv-text-detection-east-text-detector/


# In[2]:


import pytesseract


# In[3]:


import imutils


# In[26]:


from imutils.object_detection import non_max_suppression
import numpy as np
import argparse
import time
import cv2


# In[34]:


#use an image which is converted to greyscale and the counter must be aligned in such a way that it is horizontal for better results
#we manually cropped the counter and rotated to make it horizontal but one can look at 4 point transfroms or like improve image quality at source by alignment of camera
image = cv2.imread('gbn.png')
orig = image.copy()
(H, W) = image.shape[:2]

# set the new width and height and then determine the ratio in change
# for both the width and height
(newW, newH) = 352,352
rW = W / float(newW)
rH = H / float(newH)
print(rW,rH)
# resize the image and grab the new image dimensions
image = cv2.resize(image, (newW, newH))
(H, W) = image.shape[:2]


# In[35]:


layerNames = ["feature_fusion/Conv_7/Sigmoid","feature_fusion/concat_3"]


# In[36]:


#this is where we read the downloaded frozen_east_text_detection.pb
net = cv2.dnn.readNet("frozen_east_text_detection.pb")
net


# In[37]:


blob = cv2.dnn.blobFromImage(image, 1.0, (W, H),(123.68, 116.78, 103.94), swapRB=True, crop=False)
start = time.time()
net.setInput(blob)
(scores, geometry) = net.forward(layerNames)
end = time.time()


# In[38]:


(numRows, numCols) = scores.shape[2:4]
rects = []
confidences = []

for y in range(0, numRows):

    scoresData = scores[0, 0, y]
    xData0 = geometry[0, 0, y]
    xData1 = geometry[0, 1, y]
    xData2 = geometry[0, 2, y]
    xData3 = geometry[0, 3, y]
    anglesData = geometry[0, 4, y]
    for x in range(0, numCols):

        if scoresData[x] < 0.4:
            continue

        (offsetX, offsetY) = (x * 4.0, y * 4.0)

        angle = anglesData[x]
        cos = np.cos(angle)
        sin = np.sin(angle)
   
        h = xData0[x] + xData2[x]
        w = xData1[x] + xData3[x]

        endX = int(offsetX + (cos * xData1[x]) + (sin * xData2[x]))
        endY = int(offsetY - (sin * xData1[x]) + (cos * xData2[x]))
        startX = int(endX - w)
        startY = int(endY - h)
    
        rects.append((startX, startY, endX, endY))
        confidences.append(scoresData[x])


# In[ ]:





# In[39]:


boxes = non_max_suppression(np.array(rects), probs=confidences)

# loop over the bounding boxes
for (startX, startY, endX, endY) in boxes:
    # scale the bounding box coordinates based on the respective
    # ratios
    startX = int(startX * rW)
    startY = int(startY * rH)
    endX = int(endX * rW)
    endY = int(endY * rH)
    #dx=int((endX-startX)*0)
    #dy=int((endY-startY)*0)

    #startX=max(0,startX-dx)
    #startY=max(0,startY-dy)
    #endX=min(W,endX+(dx*2))
    #endY=min(H,endY+(dy*2))
    # draw the bounding box on the image
    cv2.rectangle(orig, (startX, startY), (endX, endY), (0, 255, 0), 2)
# show the output imag
cv2.imshow("Text Detection", orig)
cv2.waitKey(0)


# In[40]:


output=cv2.imread('east2_t.png')


# In[22]:


pytesseract.pytesseract.tesseract_cmd = r"C:\Program Files\Tesseract-OCR\tesseract.exe"


# In[25]:


custom_config = r'--oem 3 --psm 13 outbase digits'
print(pytesseract.image_to_string(output, config=custom_config))


# In[ ]:





# In[ ]:




