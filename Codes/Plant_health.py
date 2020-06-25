import cv2
import numpy as np
import operator

image_path = r"/Users/ayushsaran/PycharmProjects/FluxGen/Leaf_13.jpg"
frame = cv2.imread(image_path)
image = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)

# Have chosen the colours yellow, brown, green, whitish-hue as they are the most dominant colours in most leaves.
# This can be modified as per the needs of the user
boundaries = [
    ([20, 100, 100], [30, 255, 255]),
    ([10, 100, 110], [20, 160, 170]),
    ([30, 0, 175], [90, 30, 255]),
    ([25, 52, 72], [102, 255, 255])
]
# yellow filter = ([20, 100, 100], [30, 255, 255])
# brown filter = ([10, 100, 20], [20, 255, 200])
# greenish white filter = ([30, 0, 175], [90, 30, 255])
# green filter = ([25, 52, 72], [102, 255, 255])

# initialising an array to store number of pixels of the 4 colours chosen, one extra if needed.
pixels = [0, 0, 0, 0, 0]

k = 0
# Running loop over all bounding values of the colours.
for (lower, upper) in boundaries:

    print(k)
    lower = np.array(lower, dtype = "uint8")
    upper = np.array(upper, dtype = "uint8")

    mask = cv2.inRange(image, lower, upper)

    colour_filter = cv2.bitwise_and(image, image, mask = mask)
    colour = cv2.cvtColor(colour_filter, cv2.COLOR_HSV2BGR)
    cv2.imshow("Filter", np.hstack([frame, colour]))
    cv2.waitKey(0)

    for i in range(colour_filter.shape[0]):
        for j in range(colour_filter.shape[1]):
            H = colour_filter[i][j][0]
            S = colour_filter[i][j][1]
            V = colour_filter[i][j][2]

            if (H != 0) and (S != 0) and (V != 0):
                pixels[k] += 1

    k = k + 1

print(pixels)

index, max_value = max(enumerate(pixels), key=operator.itemgetter(1))
#print(index, max_value)

decay = 0
for i in range(len(pixels)):
    if i == index:
        continue
    else:
        decay += pixels[i]
decay_percentage = 100*decay/max_value
print(decay_percentage)

# Threshold set at 4.5% coverage area of the leaf
if decay_percentage > 4.5:
    print("Your plant is UNHEALHTY")
else:
    print("Your plant is HEALTHY")

