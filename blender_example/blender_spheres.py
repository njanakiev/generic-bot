import bpy
import os
import sys
from math import sin, cos, pi
from mathutils import Euler
from random import random

# Get current working directory of script
def getScriptFolder():
	# Check if script is opened in Blender program
	if(bpy.context.space_data == None):
		folder = os.path.dirname(os.path.abspath(__file__))
	else:
		folder = os.path.dirname(bpy.context.space_data.text.filepath)
	return folder
	
cwd = getScriptFolder()
sys.path.append(cwd)	

# Remove basic scene
bpy.ops.object.select_by_layer()
bpy.ops.object.delete(use_global=False)

# Create lamp
bpy.ops.object.add(type='LAMP', location=(0, 0, -10))
obj = bpy.context.object
obj.data.type = 'SUN'

# Create camera
bpy.ops.object.add(type='CAMERA', location=(0,-3.5,0))
cam = bpy.context.object
cam.rotation_euler = Euler((pi/2,0,0), 'XYZ')
# Make this the current camera
bpy.context.scene.camera = cam

for i in range(100):
	pos = tuple(3*(random() - 0.5) for axis in 'XYZ')
	s = 0.05 + random()*0.2
	bpy.ops.mesh.primitive_ico_sphere_add(size=s, location=pos)

# Set light mode
bpy.context.scene.world.light_settings.use_ambient_occlusion = True
	
# Render image
rnd = bpy.data.scenes['Scene'].render
rnd.resolution_x = 500
rnd.resolution_y = 500
rnd.resolution_percentage = 100
rnd.filepath = os.path.join(cwd, 'output.png')
bpy.ops.render.render(write_still=True)