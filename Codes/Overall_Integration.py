from selenium import webdriver
from firebase import firebase
import cv2
import numpy as np
import operator
boundaries = [
    ([18, 100, 100], [35, 255, 255]),
    ([35, 52, 72], [102, 255, 255])
]
# ([10, 100, 110], [20, 160, 170]), - brown
# ([30, 0, 175], [90, 30, 255]), - greenish white
firebase = firebase.FirebaseApplication('https://vertical-garden-20c89.firebaseio.com', None)
result_url = firebase.get('/Test Plant/Leaf', None)
prev_url = result_url
while True:
    result_url = firebase.get('/Test Plant/Leaf', None)
    if prev_url != result_url:
        DRIVER = 'chromedriver'
        driver = webdriver.Chrome(executable_path=DRIVER)
        driver.get(result_url)
        driver.save_screenshot("screenshot_test1.png")
        driver.close()

        test_read = cv2.imread('/Users/ayushsaran/PycharmProjects/FluxGen/screenshot_test1.png')
        frame = test_read[50:500, 450:750]
        image = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)

        pixels = [0, 0, 0, 0, 0]

        k = 0
        for (lower, upper) in boundaries:

            lower = np.array(lower, dtype="uint8")
            upper = np.array(upper, dtype="uint8")

            mask = cv2.inRange(image, lower, upper)

            colour_filter = cv2.bitwise_and(image, image, mask=mask)
            colour = cv2.cvtColor(colour_filter, cv2.COLOR_HSV2BGR)

            for i in range(colour_filter.shape[0]):
                for j in range(colour_filter.shape[1]):
                    H = colour_filter[i][j][0]
                    S = colour_filter[i][j][1]
                    V = colour_filter[i][j][2]

                    if (H != 0) and (S != 0) and (V != 0):
                        pixels[k] += 1

            k = k + 1
        index, max_value = max(enumerate(pixels), key=operator.itemgetter(1))
        decay = 0
        for i in range(len(pixels)):
            if i == index:
                continue
            else:
                decay += pixels[i]
        decay = pixels[0]
        decay_percentage = 100 * decay / sum(pixels)

        if decay_percentage > 9.0:
            print("Your plant is UNHEALHTY")
            answer = "Unhealthy"
        else:
            print("Your plant is HEALTHY")
            answer = "Healthy"
        prev_url = result_url
        res = firebase.put('Test Plant', 'Health',  answer)

    else:
        print("No new plant detected.")






