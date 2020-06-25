#include <ESP8266WiFi.h>
#include <WiFiClient.h> 
#include <ESP8266WebServer.h>
#include <Wire.h>
#include <Adafruit_Sensor.h>
#include <Adafruit_BME280.h>

// Set these to your desired credentials.
const char *ssid = "Your wifi name";
const char *password = "Password";
WiFiClient client;
 
Adafruit_BME280 bme;
float temperature, humidity, moisturePercentage;     //variables to store the sensor values
const int moisturePin = A0;             // moisteure sensor pin
const int motorPin = D6;                // motor pin 

void setup() {
  // put your setup code here, to run once:
Serial.begin(115200);
delay(100);
bme.begin(0x76);

pinMode(motorPin, OUTPUT);
digitalWrite(motorPin, LOW); // keep motor off initally

//Wifi mmodule
Serial.println("Connecting to ");
       Serial.println(ssid); 
 
       WiFi.begin(ssid, password); 
       while (WiFi.status() != WL_CONNECTED) 
          {
            delay(500);
            Serial.print(".");
          }
      Serial.println("");
      Serial.println("WiFi connected"); 

}

void loop() {
  // put your main code here, to run repeatedly:

temperature = bme.readTemperature();          //reads temp
humidity = bme.readHumidity();               //reads humidity
moisturePercentage = ( 100.00 - ( (analogRead(moisturePin) / 1023.00) * 100.00 ) );  //converts moisture value into % 
 
for(int n=0;n<5;n++)    //prints the sensor values 5times,at an interval of 5seconds
{
      Serial.print("Soil Moisture is  = ");
    Serial.print(moisturePercentage);
    Serial.println("%");

    Serial.print("Temperature is  = ");
    Serial.print(temperature);
    Serial.println("C");

    Serial.print("Humidity is  = ");
    Serial.print(humidity);
    Serial.println("");
    
//   Check the moisture% and turn on the motor. For Loam soil it is 35% to 45%.

if (moisturePercentage < 35) 
{
  digitalWrite(motorPin, HIGH);         // tun on motor
  delay(5);                            //keep it on for 5s
  digitalWrite(motorPin, LOW);        //motor off
}
else if (moisturePercentage > 35 && moisturePercentage < 45) 
{
  digitalWrite(motorPin, HIGH);         //keep the motor on for this range 
  delay(3);                            //keep it on for 3s 
  digitalWrite(motorPin, LOW);        //motor off
}
else if (moisturePercentage > 45)
{
  digitalWrite(motorPin, LOW);          // turn off mottor
}

delay(5);            
break;              //out of the loop
  }

}
