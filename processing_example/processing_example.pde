
void setup(){
  size(800, 400, P3D);
  background(0);
  
  int n = (int) random(5, 20);
  float heights[] = new float[n];
  for(int i=0; i<heights.length; i++){
    heights[i] = random(1);
  }
  
  background(200);
  noStroke();
  directionalLight(255, 255, 255, 0.2, -1, -0.7);
  
  float step = (width / (float)(n - 1)); 
  for(int i=0; i<n; i++){
    pushMatrix();
    translate(step*i, height - height*heights[i]/2, -6*step);
    box(step*0.9, height*heights[i], 10*step);
    popMatrix();
  }
  save("output.png");
  exit();
}