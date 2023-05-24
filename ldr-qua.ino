int valorLDR = 0;
void setup() {
  // put your setup code here, to run once:
  pinMode(A0,INPUT);
  pinMode(10,OUTPUT);
  Serial.begin(9600);
}
void loop() {
  valorLDR = analogRead(A0);
  // put your main code here, to run repeatedly:
  Serial.print(valorLDR);
  Serial.print("\t");
  Serial.println(600);
  if(valorLDR <400){
    digitalWrite(10,HIGH);
  }else{
    digitalWrite(10,LOW);
  }
  delay(10);
  
}
