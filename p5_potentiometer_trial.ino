void setup() {
  Serial.begin(9600);  // Start Serial communication at 9600 baud
}

void loop() {
  int potValue = analogRead(A0); // Read potentiometer value from pin A0
  Serial.println(potValue);     // Send the value over Serial
  delay(10);                    // Small delay to avoid overwhelming Serial
}

