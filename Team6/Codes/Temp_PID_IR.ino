/* Copyright 2017, 2018 David Conran
*
* An IR LED circuit *MUST* be connected to the ESP8266 on a pin
* as specified by kIrLed below.
*
* TL;DR: The IR LED needs to be driven by a transistor for a good result.
*
* Suggested circuit:
*     https://github.com/crankyoldgit/IRremoteESP8266/wiki#ir-sending
*
* Common mistakes & tips:
*   * Don't just connect the IR LED directly to the pin, it won't
*     have enough current to drive the IR LED effectively.
*   * Make sure you have the IR LED polarity correct.
*     See: https://learn.sparkfun.com/tutorials/polarity/diode-and-led-polarity
*   * Typical digital camera/phones can be used to see if the IR LED is flashed.
*     Replace the IR LED with a normal LED if you don't have a digital camera
*     when debugging.
*   * Avoid using the following pins unless you really know what you are doing:
*     * Pin 0/D3: Can interfere with the boot/program mode & support circuits.
*     * Pin 1/TX/TXD0: Any serial transmissions from the ESP8266 will interfere.
*     * Pin 3/RX/RXD0: Any serial transmissions to the ESP8266 will interfere.
*   * ESP-01 modules are tricky. We suggest you use a module with more GPIOs
*     for your first time. e.g. ESP-12 etc.
*/
#include <Arduino.h>
#include <IRremoteESP8266.h>
#include <IRsend.h>
#include <ir_Panasonic.h>

#include "DHTesp.h"

#ifdef ESP32
#pragma message(THIS EXAMPLE IS FOR ESP8266 ONLY!)
#error Select ESP8266 board.
#endif

DHTesp dht;

float temperature_read = 0.0;
float set_temperature = 23;
float PID_error = 0;
float previous_error = 0;
float elapsedTime, Time, timePrev;
int PID_value = 0;

//PID constants
int kp = 9.1;   int ki = 0.3;   int kd = 1.8;
int PID_p = 0;    int PID_i = 0;    int PID_d = 0;

const uint16_t kIrLed = 4;  // ESP8266 GPIO pin to use. Recommended: 4 (D2).
IRPanasonicAc ac(kIrLed);  // Set the GPIO used for sending messages.

void printState() {
  // Display the settings.
  Serial.println("Panasonic A/C remote is in the following state:");
  Serial.printf("  %s\n", ac.toString().c_str());
  // Display the encoded IR sequence.
  unsigned char* ir_code = ac.getRaw();
  Serial.print("IR Code: 0x");
  for (uint8_t i = 0; i < kPanasonicAcStateLength; i++)
    Serial.printf("%02X", ir_code[i]);
  Serial.println();
}

void setup() {
  ac.begin();
  Serial.begin(115200);
  delay(200);
  
  dht.setup(17, DHTesp::DHT22); // Connect DHT sensor to GPIO 17
  Time = millis(); 
  
  // Set up what we want to send. See ir_Panasonic.cpp for all the options.
  Serial.println("Default state of the remote.");
  printState();
  Serial.println("Setting desired state for A/C.");
  ac.setModel(kPanasonicRkr);
  ac.on();
  ac.setFan(kPanasonicAcFanAuto);
  ac.setMode(kPanasonicAcCool);
  ac.setTemp(26);
  ac.setSwingVertical(kPanasonicAcSwingVAuto);
  ac.setSwingHorizontal(kPanasonicAcSwingHAuto);
}

void loop() {
  // Now send the IR signal.
#if SEND_PANASONIC_AC
  Serial.println("Sending IR command to A/C ...");
  ac.send();
#endif  // SEND_PANASONIC_AC
  printState();
  temperature_read = dht.getTemperature();
  PID_error = set_temperature - temperature_read;
  
  //Calculate the P value
  PID_p = kp * PID_error;
  
  //Calculate the I value in a range on +-3
  if(-3 < PID_error <3)
  {
    PID_i = PID_i + (ki * PID_error);
  }

  timePrev = Time;                            
  Time = millis();                            
  elapsedTime = (Time - timePrev) / 1000; 
  
  PID_d = kd*((PID_error - previous_error)/elapsedTime);
  
  PID_value = PID_p + PID_i + PID_d;

  previous_error = PID_error;     //Remember to store the previous error for next loop.
  ac.setTemp(PID_value);
  delay(5000);
}

/*

********************************************************* THE CODE BELOW IS ONLY PID + TEMPERATURE CONTROL ******************************************************
#include "DHTesp.h"

#ifdef ESP32
#pragma message(THIS EXAMPLE IS FOR ESP8266 ONLY!)
#error Select ESP8266 board.
#endif

DHTesp dht;

float temperature_read = 0.0;
float set_temperature = 23;
float PID_error = 0;
float previous_error = 0;
float elapsedTime, Time, timePrev;
int PID_value = 0;

//PID constants
int kp = 9.1;   int ki = 0.3;   int kd = 1.8;
int PID_p = 0;    int PID_i = 0;    int PID_d = 0;

void setup()
{  
  Serial.begin(9600);
  dht.setup(17, DHTesp::DHT22); // Connect DHT sensor to GPIO 17
  Time = millis(); 
}


void loop() 
{
  temperature_read = dht.getTemperature();
  PID_error = set_temperature - temperature_read;
  
  //Calculate the P value
  PID_p = kp * PID_error;
  
  //Calculate the I value in a range on +-3
  if(-3 < PID_error <3)
  {
    PID_i = PID_i + (ki * PID_error);
  }

  timePrev = Time;                            
  Time = millis();                            
  elapsedTime = (Time - timePrev) / 1000; 
  
  PID_d = kd*((PID_error - previous_error)/elapsedTime);
  
  Temp_New = PID_p + PID_i + PID_d;

  previous_error = PID_error;     //Remember to store the previous error for next loop.
}
 */
