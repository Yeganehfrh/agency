#!/usr/bin/env python2
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy2 Experiment Builder (v1.85.0),
    on Sat May 20 20:14:19 2017
If you publish work using this script please cite the PsychoPy publications:
    Peirce, JW (2007) PsychoPy - Psychophysics software in Python.
        Journal of Neuroscience Methods, 162(1-2), 8-13.
    Peirce, JW (2009) Generating stimuli for neuroscience using PsychoPy.
        Frontiers in Neuroinformatics, 2:10. doi: 10.3389/neuro.11.010.2008
"""

from __future__ import absolute_import, division

import psychopy
psychopy.useVersion('latest')

from psychopy import locale_setup, gui, visual, core, data, event, logging, sound
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)
import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle
import os  # handy system and path functions
import sys  # to get file system encoding

# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__)).decode(sys.getfilesystemencoding())
os.chdir(_thisDir)

# Store info about the experiment session
expName = u'agency_v2'  # from the Builder filename that created this script
expInfo = {u'Gender': u'Female', u'Age': u'', u'Session': u'001', u'Name': u'', u'Hand': u''}
dlg = gui.DlgFromDict(dictionary=expInfo, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['Name'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath=None,
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.EXP)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp

# Start Code - component code to be run before the window creation

# Setup the Window
win = visual.Window(
    size=(1440, 900), fullscr=True, screen=0,
    allowGUI=False, allowStencil=False,
    monitor=u'testMonitor', color=u'black', colorSpace='rgb',
    blendMode='avg', useFBO=True,
    units='height')
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess

# Initialize components for Routine "intro_1"
intro_1Clock = core.Clock()
# DEBUG: On macOS, first run 'socat -d -d pty,raw,echo=0 pty,raw,echo=0' to simulate ports

# import serial module
import serial

# This is for macOS
#serial = serial.Serial('/dev/ttys001', 57600, rtscts=True, dsrdtr=True)

# This is for Windows. You must have a COM6 in your device manager
serial = serial.Serial('COM6', 57600, rtscts=True, dsrdtr=True)

# Write start of experiment marker
serial.write(chr(0))
intro_image_1 = visual.ImageStim(
    win=win, name='intro_image_1',
    image='images/1intro_1.png', mask=None,
    ori=0, pos=(0, 0), size=(0.8, 0.8),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-1.0)

# Initialize components for Routine "intro_2"
intro_2Clock = core.Clock()
intro_image_2 = visual.ImageStim(
    win=win, name='intro_image_2',
    image='images/2intro_2.png', mask=None,
    ori=0, pos=(0, 0), size=(0.8, 0.8),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=0.0)

# Initialize components for Routine "intro_3"
intro_3Clock = core.Clock()
intro_image_3 = visual.ImageStim(
    win=win, name='intro_image_3',
    image='images/3intro_3.png', mask=None,
    ori=0, pos=(0, 0), size=(0.8, 0.8),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=0.0)

# Initialize components for Routine "intro_4"
intro_4Clock = core.Clock()
start_practice_image = visual.ImageStim(
    win=win, name='start_practice_image',
    image='images/4start_practice.png', mask=None,
    ori=0, pos=(0, 0), size=(0.8, 0.8),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=0.0)

# Initialize components for Routine "practice"
practiceClock = core.Clock()

prac_fixation = visual.TextStim(win=win, name='prac_fixation',
    text='+',
    font='Samim',
    pos=(0, 0), height=0.2, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1,
    depth=-1.0);
left_circle = visual.Polygon(
    win=win, name='left_circle',
    edges=99, size=(0.3, 0.3),
    ori=0, pos=(-0.267, 0),
    lineWidth=0, lineColor=[-1.000,-1.000,-1.000], lineColorSpace='rgb',
    fillColor=1.0, fillColorSpace='rgb',
    opacity=1, depth=-2.0, interpolate=True)
right_circle = visual.Polygon(
    win=win, name='right_circle',
    edges=99, size=(0.3, 0.3),
    ori=0, pos=(+0.267, 0),
    lineWidth=0, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=1.0, fillColorSpace='rgb',
    opacity=1, depth=-3.0, interpolate=True)
text = visual.TextStim(win=win, name='text',
    text=u'?',
    font=u'Samim',
    pos=(0, 0), height=0.08, wrapWidth=None, ori=0, 
    color=u'white', colorSpace='rgb', opacity=1,
    depth=-4.0);
ISI_practice = core.StaticPeriod(win=win, screenHz=expInfo['frameRate'], name='ISI_practice')

# Initialize components for Routine "practice_feedback"
practice_feedbackClock = core.Clock()

ISI_practice_result = core.StaticPeriod(win=win, screenHz=expInfo['frameRate'], name='ISI_practice_result')
practice_feedback_image = visual.ImageStim(
    win=win, name='practice_feedback_image',
    image='images/7practice_timeout.png', mask=None,
    ori=0, pos=(0, 0), size=(0.8, 0.8),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-2.0)

# Initialize components for Routine "end_of_practice"
end_of_practiceClock = core.Clock()
image = visual.ImageStim(
    win=win, name='image',
    image='images/8end_of_practice.png', mask=None,
    ori=0, pos=(0, 0), size=(0.8, 0.8),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=0.0)

# Initialize components for Routine "trials"
trialsClock = core.Clock()

fixation = visual.TextStim(win=win, name='fixation',
    text='default text',
    font='Samim',
    pos=(0, 0), height=0.2, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1,
    depth=-1.0);
circle_1 = visual.Polygon(
    win=win, name='circle_1',
    edges=99, size=(0.3, 0.3),
    ori=0, pos=(-0.267, 0),
    lineWidth=0, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=1.0, fillColorSpace='rgb',
    opacity=1, depth=-2.0, interpolate=True)
circle_2 = visual.Polygon(
    win=win, name='circle_2',
    edges=99, size=(0.3, 0.3),
    ori=0, pos=(+0.267, 0),
    lineWidth=0, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=1.0, fillColorSpace='rgb',
    opacity=1, depth=-3.0, interpolate=True)
ISI = core.StaticPeriod(win=win, screenHz=expInfo['frameRate'], name='ISI')
respond_text = visual.TextStim(win=win, name='respond_text',
    text=u'\u061f',
    font=u'Samim',
    pos=(0, 0), height=0.08, wrapWidth=None, ori=0, 
    color=u'white', colorSpace='rgb', opacity=1,
    depth=-5.0);
outcome_image = visual.ImageStim(
    win=win, name='outcome_image',
    image='images/8next_trial.png', mask=None,
    ori=0, pos=(0, 0), size=(0.8, 0.8),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-7.0)

# Initialize components for Routine "rest"
restClock = core.Clock()
rest_image_1 = visual.ImageStim(
    win=win, name='rest_image_1',
    image='images/9rest.png', mask=None,
    ori=0, pos=(0, 0), size=(0.8, 0.8),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=0.0)

# Initialize components for Routine "thankyou"
thankyouClock = core.Clock()
thank_you_image = visual.ImageStim(
    win=win, name='thank_you_image',
    image='images/10thank_you.png', mask=None,
    ori=0, pos=(0, 0), size=(0.8, 0.8),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=0.0)

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# ------Prepare to start Routine "intro_1"-------
t = 0
intro_1Clock.reset()  # clock
frameN = -1
continueRoutine = True
# update component parameters for each repeat
# Write start of routine marker
serial.write(chr(1))
key_resp_1 = event.BuilderKeyResponse()
# keep track of which components have finished
intro_1Components = [intro_image_1, key_resp_1]
for thisComponent in intro_1Components:
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED

# -------Start Routine "intro_1"-------
while continueRoutine:
    # get current time
    t = intro_1Clock.getTime()
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    
    # *intro_image_1* updates
    if t >= 0.0 and intro_image_1.status == NOT_STARTED:
        # keep track of start time/frame for later
        intro_image_1.tStart = t
        intro_image_1.frameNStart = frameN  # exact frame index
        intro_image_1.setAutoDraw(True)
    
    # *key_resp_1* updates
    if t >= 0.0 and key_resp_1.status == NOT_STARTED:
        # keep track of start time/frame for later
        key_resp_1.tStart = t
        key_resp_1.frameNStart = frameN  # exact frame index
        key_resp_1.status = STARTED
        # keyboard checking is just starting
        win.callOnFlip(key_resp_1.clock.reset)  # t=0 on next screen flip
        event.clearEvents(eventType='keyboard')
    if key_resp_1.status == STARTED:
        theseKeys = event.getKeys(keyList=['y', 'n', 'left', 'right', 'space'])
        
        # check for quit:
        if "escape" in theseKeys:
            endExpNow = True
        if len(theseKeys) > 0:  # at least one key was pressed
            key_resp_1.keys = theseKeys[-1]  # just the last key pressed
            key_resp_1.rt = key_resp_1.clock.getTime()
            # a response ends the routine
            continueRoutine = False
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in intro_1Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # check for quit (the Esc key)
    if endExpNow or event.getKeys(keyList=["escape"]):
        core.quit()
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "intro_1"-------
for thisComponent in intro_1Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)

# check responses
if key_resp_1.keys in ['', [], None]:  # No response was made
    key_resp_1.keys=None
thisExp.addData('key_resp_1.keys',key_resp_1.keys)
if key_resp_1.keys != None:  # we had a response
    thisExp.addData('key_resp_1.rt', key_resp_1.rt)
thisExp.nextEntry()
# the Routine "intro_1" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "intro_2"-------
t = 0
intro_2Clock.reset()  # clock
frameN = -1
continueRoutine = True
# update component parameters for each repeat
key_resp_2 = event.BuilderKeyResponse()
# keep track of which components have finished
intro_2Components = [intro_image_2, key_resp_2]
for thisComponent in intro_2Components:
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED

# -------Start Routine "intro_2"-------
while continueRoutine:
    # get current time
    t = intro_2Clock.getTime()
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *intro_image_2* updates
    if t >= 0.0 and intro_image_2.status == NOT_STARTED:
        # keep track of start time/frame for later
        intro_image_2.tStart = t
        intro_image_2.frameNStart = frameN  # exact frame index
        intro_image_2.setAutoDraw(True)
    
    # *key_resp_2* updates
    if t >= 0.0 and key_resp_2.status == NOT_STARTED:
        # keep track of start time/frame for later
        key_resp_2.tStart = t
        key_resp_2.frameNStart = frameN  # exact frame index
        key_resp_2.status = STARTED
        # keyboard checking is just starting
        win.callOnFlip(key_resp_2.clock.reset)  # t=0 on next screen flip
        event.clearEvents(eventType='keyboard')
    if key_resp_2.status == STARTED:
        theseKeys = event.getKeys(keyList=['y', 'n', 'left', 'right', 'space'])
        
        # check for quit:
        if "escape" in theseKeys:
            endExpNow = True
        if len(theseKeys) > 0:  # at least one key was pressed
            key_resp_2.keys = theseKeys[-1]  # just the last key pressed
            key_resp_2.rt = key_resp_2.clock.getTime()
            # a response ends the routine
            continueRoutine = False
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in intro_2Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # check for quit (the Esc key)
    if endExpNow or event.getKeys(keyList=["escape"]):
        core.quit()
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "intro_2"-------
for thisComponent in intro_2Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if key_resp_2.keys in ['', [], None]:  # No response was made
    key_resp_2.keys=None
thisExp.addData('key_resp_2.keys',key_resp_2.keys)
if key_resp_2.keys != None:  # we had a response
    thisExp.addData('key_resp_2.rt', key_resp_2.rt)
thisExp.nextEntry()
# the Routine "intro_2" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "intro_3"-------
t = 0
intro_3Clock.reset()  # clock
frameN = -1
continueRoutine = True
# update component parameters for each repeat
key_resp_3 = event.BuilderKeyResponse()
# keep track of which components have finished
intro_3Components = [intro_image_3, key_resp_3]
for thisComponent in intro_3Components:
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED

# -------Start Routine "intro_3"-------
while continueRoutine:
    # get current time
    t = intro_3Clock.getTime()
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *intro_image_3* updates
    if t >= 0.0 and intro_image_3.status == NOT_STARTED:
        # keep track of start time/frame for later
        intro_image_3.tStart = t
        intro_image_3.frameNStart = frameN  # exact frame index
        intro_image_3.setAutoDraw(True)
    
    # *key_resp_3* updates
    if t >= 0.0 and key_resp_3.status == NOT_STARTED:
        # keep track of start time/frame for later
        key_resp_3.tStart = t
        key_resp_3.frameNStart = frameN  # exact frame index
        key_resp_3.status = STARTED
        # keyboard checking is just starting
        win.callOnFlip(key_resp_3.clock.reset)  # t=0 on next screen flip
        event.clearEvents(eventType='keyboard')
    if key_resp_3.status == STARTED:
        theseKeys = event.getKeys(keyList=['y', 'n', 'left', 'right', 'space'])
        
        # check for quit:
        if "escape" in theseKeys:
            endExpNow = True
        if len(theseKeys) > 0:  # at least one key was pressed
            key_resp_3.keys = theseKeys[-1]  # just the last key pressed
            key_resp_3.rt = key_resp_3.clock.getTime()
            # a response ends the routine
            continueRoutine = False
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in intro_3Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # check for quit (the Esc key)
    if endExpNow or event.getKeys(keyList=["escape"]):
        core.quit()
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "intro_3"-------
for thisComponent in intro_3Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if key_resp_3.keys in ['', [], None]:  # No response was made
    key_resp_3.keys=None
thisExp.addData('key_resp_3.keys',key_resp_3.keys)
if key_resp_3.keys != None:  # we had a response
    thisExp.addData('key_resp_3.rt', key_resp_3.rt)
thisExp.nextEntry()
# the Routine "intro_3" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "intro_4"-------
t = 0
intro_4Clock.reset()  # clock
frameN = -1
continueRoutine = True
# update component parameters for each repeat
key_resp_4 = event.BuilderKeyResponse()
# keep track of which components have finished
intro_4Components = [start_practice_image, key_resp_4]
for thisComponent in intro_4Components:
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED

# -------Start Routine "intro_4"-------
while continueRoutine:
    # get current time
    t = intro_4Clock.getTime()
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *start_practice_image* updates
    if t >= 0 and start_practice_image.status == NOT_STARTED:
        # keep track of start time/frame for later
        start_practice_image.tStart = t
        start_practice_image.frameNStart = frameN  # exact frame index
        start_practice_image.setAutoDraw(True)
    
    # *key_resp_4* updates
    if t >= 0.0 and key_resp_4.status == NOT_STARTED:
        # keep track of start time/frame for later
        key_resp_4.tStart = t
        key_resp_4.frameNStart = frameN  # exact frame index
        key_resp_4.status = STARTED
        # keyboard checking is just starting
        win.callOnFlip(key_resp_4.clock.reset)  # t=0 on next screen flip
        event.clearEvents(eventType='keyboard')
    if key_resp_4.status == STARTED:
        theseKeys = event.getKeys(keyList=['y', 'n', 'left', 'right', 'space'])
        
        # check for quit:
        if "escape" in theseKeys:
            endExpNow = True
        if len(theseKeys) > 0:  # at least one key was pressed
            key_resp_4.keys = theseKeys[-1]  # just the last key pressed
            key_resp_4.rt = key_resp_4.clock.getTime()
            # a response ends the routine
            continueRoutine = False
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in intro_4Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # check for quit (the Esc key)
    if endExpNow or event.getKeys(keyList=["escape"]):
        core.quit()
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "intro_4"-------
for thisComponent in intro_4Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if key_resp_4.keys in ['', [], None]:  # No response was made
    key_resp_4.keys=None
thisExp.addData('key_resp_4.keys',key_resp_4.keys)
if key_resp_4.keys != None:  # we had a response
    thisExp.addData('key_resp_4.rt', key_resp_4.rt)
thisExp.nextEntry()
# the Routine "intro_4" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
practice_loop = data.TrialHandler(nReps=1, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions(u'practice.xlsx'),
    seed=None, name='practice_loop')
thisExp.addLoop(practice_loop)  # add the loop to the experiment
thisPractice_loop = practice_loop.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisPractice_loop.rgb)
if thisPractice_loop != None:
    for paramName in thisPractice_loop.keys():
        exec(paramName + '= thisPractice_loop.' + paramName)

for thisPractice_loop in practice_loop:
    currentLoop = practice_loop
    # abbreviate parameter names if possible (e.g. rgb = thisPractice_loop.rgb)
    if thisPractice_loop != None:
        for paramName in thisPractice_loop.keys():
            exec(paramName + '= thisPractice_loop.' + paramName)
    
    # ------Prepare to start Routine "practice"-------
    t = 0
    practiceClock.reset()  # clock
    frameN = -1
    continueRoutine = True
    routineTimer.add(3.400000)
    # update component parameters for each repeat
    practice_marker_sent = False
    
    practice_key = event.BuilderKeyResponse()
    # keep track of which components have finished
    practiceComponents = [prac_fixation, left_circle, right_circle, text, practice_key, ISI_practice]
    for thisComponent in practiceComponents:
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    
    # -------Start Routine "practice"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = practiceClock.getTime()
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        if prac_fixation.status == STARTED and (not practice_marker_sent):
          # Mark start of practice (fixation is visible)
          practice_marker_sent = True
          serial.write(chr(practice_loop.thisN))
        
        #if practice_key.status == STARTED:
          #theseKeys_p = event.getKeys(keyList=['left','right'])
          # Check if any key pressed
          #if len(theseKeys_p) > 0:
            # Pressed!
            #serial.write(chr(practice_loop.thisN))
        
        # *prac_fixation* updates
        if t >= 0.0 and prac_fixation.status == NOT_STARTED:
            # keep track of start time/frame for later
            prac_fixation.tStart = t
            prac_fixation.frameNStart = frameN  # exact frame index
            prac_fixation.setAutoDraw(True)
        frameRemains = 0.0 + 1.0- win.monitorFramePeriod * 0.75  # most of one frame period left
        if prac_fixation.status == STARTED and t >= frameRemains:
            prac_fixation.setAutoDraw(False)
        
        # *left_circle* updates
        if t >= 1.0 and left_circle.status == NOT_STARTED:
            # keep track of start time/frame for later
            left_circle.tStart = t
            left_circle.frameNStart = frameN  # exact frame index
            left_circle.setAutoDraw(True)
        frameRemains = 1.0 + 0.2- win.monitorFramePeriod * 0.75  # most of one frame period left
        if left_circle.status == STARTED and t >= frameRemains:
            left_circle.setAutoDraw(False)
        
        # *right_circle* updates
        if t >= 1.0 and right_circle.status == NOT_STARTED:
            # keep track of start time/frame for later
            right_circle.tStart = t
            right_circle.frameNStart = frameN  # exact frame index
            right_circle.setAutoDraw(True)
        frameRemains = 1.0 + 0.2- win.monitorFramePeriod * 0.75  # most of one frame period left
        if right_circle.status == STARTED and t >= frameRemains:
            right_circle.setAutoDraw(False)
        
        # *text* updates
        if t >= 1.4 and text.status == NOT_STARTED:
            # keep track of start time/frame for later
            text.tStart = t
            text.frameNStart = frameN  # exact frame index
            text.setAutoDraw(True)
        frameRemains = 1.4 + 2.0- win.monitorFramePeriod * 0.75  # most of one frame period left
        if text.status == STARTED and t >= frameRemains:
            text.setAutoDraw(False)
        
        # *practice_key* updates
        if t >= 1.4 and practice_key.status == NOT_STARTED:
            # keep track of start time/frame for later
            practice_key.tStart = t
            practice_key.frameNStart = frameN  # exact frame index
            practice_key.status = STARTED
            # keyboard checking is just starting
            win.callOnFlip(practice_key.clock.reset)  # t=0 on next screen flip
            event.clearEvents(eventType='keyboard')
        frameRemains = 1.4 + 2.0- win.monitorFramePeriod * 0.75  # most of one frame period left
        if practice_key.status == STARTED and t >= frameRemains:
            practice_key.status = STOPPED
        if practice_key.status == STARTED:
            theseKeys = event.getKeys(keyList=['left', 'right'])
            
            # check for quit:
            if "escape" in theseKeys:
                endExpNow = True
            if len(theseKeys) > 0:  # at least one key was pressed
                practice_key.keys = theseKeys[-1]  # just the last key pressed
                practice_key.rt = practice_key.clock.getTime()
                # a response ends the routine
                continueRoutine = False
        # *ISI_practice* period
        if t >= 0.0 and ISI_practice.status == NOT_STARTED:
            # keep track of start time/frame for later
            ISI_practice.tStart = t
            ISI_practice.frameNStart = frameN  # exact frame index
            ISI_practice.start(0.4)
        elif ISI_practice.status == STARTED:  # one frame should pass before updating params and completing
            # updating other components during *ISI_practice*
            left_circle.setFillColor(left_color)
            right_circle.setFillColor(right_color)
            # component updates done
            ISI_practice.complete()  # finish the static period
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in practiceComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # check for quit (the Esc key)
        if endExpNow or event.getKeys(keyList=["escape"]):
            core.quit()
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "practice"-------
    for thisComponent in practiceComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    
    # check responses
    if practice_key.keys in ['', [], None]:  # No response was made
        practice_key.keys=None
    practice_loop.addData('practice_key.keys',practice_key.keys)
    if practice_key.keys != None:  # we had a response
        practice_loop.addData('practice_key.rt', practice_key.rt)
    
    # ------Prepare to start Routine "practice_feedback"-------
    t = 0
    practice_feedbackClock.reset()  # clock
    frameN = -1
    continueRoutine = True
    routineTimer.add(2.500000)
    # update component parameters for each repeat
    
    # Mark start of showing feedback routine
    serial.write(chr(practice_loop.thisN))
    
    timeout = False
    failed = False
    success = False
    
    # Extract correct keys from Excel file
    correctKeys = correct.split(',')
    
    # Add empty responses if correct array contains empty string
    if '' in correctKeys:
      correctKeys.extend([None,[]])
    
    # check success/failed
    if practice_key.keys in correctKeys:
      success = True
    elif not practice_key.keys in [None,'',[]]:
      if (not '' in correctKeys):
        failed = True
    
    # Update feedback image according to the success or failed conditions
    if success:
      practice_feedback_image.image = 'images/6practice_success.png'
    elif failed:
      practice_feedback_image.image = 'images/5practice_failed.png'
    else:
      practice_feedback_image.image = 'images/7practice_timeout.png'
      timeout = True
    
    # keep track of which components have finished
    practice_feedbackComponents = [ISI_practice_result, practice_feedback_image]
    for thisComponent in practice_feedbackComponents:
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    
    # -------Start Routine "practice_feedback"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = practice_feedbackClock.getTime()
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        
        # *practice_feedback_image* updates
        if t >= 0.5 and practice_feedback_image.status == NOT_STARTED:
            # keep track of start time/frame for later
            practice_feedback_image.tStart = t
            practice_feedback_image.frameNStart = frameN  # exact frame index
            practice_feedback_image.setAutoDraw(True)
        frameRemains = 0.5 + 2.0- win.monitorFramePeriod * 0.75  # most of one frame period left
        if practice_feedback_image.status == STARTED and t >= frameRemains:
            practice_feedback_image.setAutoDraw(False)
        # *ISI_practice_result* period
        if t >= 0.0 and ISI_practice_result.status == NOT_STARTED:
            # keep track of start time/frame for later
            ISI_practice_result.tStart = t
            ISI_practice_result.frameNStart = frameN  # exact frame index
            ISI_practice_result.start(0.5)
        elif ISI_practice_result.status == STARTED:  # one frame should pass before updating params and completing
            ISI_practice_result.complete()  # finish the static period
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in practice_feedbackComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # check for quit (the Esc key)
        if endExpNow or event.getKeys(keyList=["escape"]):
            core.quit()
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "practice_feedback"-------
    for thisComponent in practice_feedbackComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    
    thisExp.nextEntry()
    
# completed 1 repeats of 'practice_loop'

# get names of stimulus parameters
if practice_loop.trialList in ([], [None], None):
    params = []
else:
    params = practice_loop.trialList[0].keys()
# save data for this loop
practice_loop.saveAsExcel(filename + '.xlsx', sheetName='practice_loop',
    stimOut=params,
    dataOut=['n','all_mean','all_std', 'all_raw'])

# ------Prepare to start Routine "end_of_practice"-------
t = 0
end_of_practiceClock.reset()  # clock
frameN = -1
continueRoutine = True
# update component parameters for each repeat
key_resp_5 = event.BuilderKeyResponse()
# keep track of which components have finished
end_of_practiceComponents = [image, key_resp_5]
for thisComponent in end_of_practiceComponents:
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED

# -------Start Routine "end_of_practice"-------
while continueRoutine:
    # get current time
    t = end_of_practiceClock.getTime()
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *image* updates
    if t >= 0.5 and image.status == NOT_STARTED:
        # keep track of start time/frame for later
        image.tStart = t
        image.frameNStart = frameN  # exact frame index
        image.setAutoDraw(True)
    
    # *key_resp_5* updates
    if t >= 0.5 and key_resp_5.status == NOT_STARTED:
        # keep track of start time/frame for later
        key_resp_5.tStart = t
        key_resp_5.frameNStart = frameN  # exact frame index
        key_resp_5.status = STARTED
        # keyboard checking is just starting
        win.callOnFlip(key_resp_5.clock.reset)  # t=0 on next screen flip
        event.clearEvents(eventType='keyboard')
    if key_resp_5.status == STARTED:
        theseKeys = event.getKeys(keyList=['y', 'n', 'left', 'right', 'space'])
        
        # check for quit:
        if "escape" in theseKeys:
            endExpNow = True
        if len(theseKeys) > 0:  # at least one key was pressed
            key_resp_5.keys = theseKeys[-1]  # just the last key pressed
            key_resp_5.rt = key_resp_5.clock.getTime()
            # a response ends the routine
            continueRoutine = False
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in end_of_practiceComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # check for quit (the Esc key)
    if endExpNow or event.getKeys(keyList=["escape"]):
        core.quit()
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "end_of_practice"-------
for thisComponent in end_of_practiceComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if key_resp_5.keys in ['', [], None]:  # No response was made
    key_resp_5.keys=None
thisExp.addData('key_resp_5.keys',key_resp_5.keys)
if key_resp_5.keys != None:  # we had a response
    thisExp.addData('key_resp_5.rt', key_resp_5.rt)
thisExp.nextEntry()
# the Routine "end_of_practice" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
blocks = data.TrialHandler(nReps=3, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=[None],
    seed=None, name='blocks')
thisExp.addLoop(blocks)  # add the loop to the experiment
thisBlock = blocks.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisBlock.rgb)
if thisBlock != None:
    for paramName in thisBlock.keys():
        exec(paramName + '= thisBlock.' + paramName)

for thisBlock in blocks:
    currentLoop = blocks
    # abbreviate parameter names if possible (e.g. rgb = thisBlock.rgb)
    if thisBlock != None:
        for paramName in thisBlock.keys():
            exec(paramName + '= thisBlock.' + paramName)
    
    # set up handler to look after randomisation of conditions etc
    trials_loop = data.TrialHandler(nReps=1, method='random', 
        extraInfo=expInfo, originPath=-1,
        trialList=data.importConditions(u'conditions.xlsx'),
        seed=None, name='trials_loop')
    thisExp.addLoop(trials_loop)  # add the loop to the experiment
    thisTrials_loop = trials_loop.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisTrials_loop.rgb)
    if thisTrials_loop != None:
        for paramName in thisTrials_loop.keys():
            exec(paramName + '= thisTrials_loop.' + paramName)
    
    for thisTrials_loop in trials_loop:
        currentLoop = trials_loop
        # abbreviate parameter names if possible (e.g. rgb = thisTrials_loop.rgb)
        if thisTrials_loop != None:
            for paramName in thisTrials_loop.keys():
                exec(paramName + '= thisTrials_loop.' + paramName)
        
        # ------Prepare to start Routine "trials"-------
        t = 0
        trialsClock.reset()  # clock
        frameN = -1
        continueRoutine = True
        # update component parameters for each repeat
        delay = 0.0
        outcome_time = 4.4 # initial value, will be changed
        timeout = True
        if agency_level=="low":
          delay = 2.0
        
        trial_marker_sent = False
        
        fixation.setText('+')
        circle_1.setFillColor(color_1)
        circle_2.setFillColor(color_2)
        respond_key = event.BuilderKeyResponse()
        # keep track of which components have finished
        trialsComponents = [fixation, circle_1, circle_2, ISI, respond_text, respond_key, outcome_image]
        for thisComponent in trialsComponents:
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        
        # -------Start Routine "trials"-------
        while continueRoutine:
            # get current time
            t = trialsClock.getTime()
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # Send single serial trigger for the current trial (when fixation starts)
            if fixation.status==STARTED and (not trial_marker_sent):
              trial_marker_sent = True
              serial.write(chr(trials_loop.thisN))
            
            # If subject pressed any key, change outcome_time according to the delay value
            if not (respond_key.keys in ['', [], None]):
              outcome_time = 2.4 + respond_key.rt + delay
              timeout = False
            
            
            # *fixation* updates
            if t >= 1.0 and fixation.status == NOT_STARTED:
                # keep track of start time/frame for later
                fixation.tStart = t
                fixation.frameNStart = frameN  # exact frame index
                fixation.setAutoDraw(True)
            frameRemains = 1.0 + 1.0- win.monitorFramePeriod * 0.75  # most of one frame period left
            if fixation.status == STARTED and t >= frameRemains:
                fixation.setAutoDraw(False)
            
            # *circle_1* updates
            if t >= 2.0 and circle_1.status == NOT_STARTED:
                # keep track of start time/frame for later
                circle_1.tStart = t
                circle_1.frameNStart = frameN  # exact frame index
                circle_1.setAutoDraw(True)
            frameRemains = 2.0 + 0.2- win.monitorFramePeriod * 0.75  # most of one frame period left
            if circle_1.status == STARTED and t >= frameRemains:
                circle_1.setAutoDraw(False)
            
            # *circle_2* updates
            if t >= 2.0 and circle_2.status == NOT_STARTED:
                # keep track of start time/frame for later
                circle_2.tStart = t
                circle_2.frameNStart = frameN  # exact frame index
                circle_2.setAutoDraw(True)
            frameRemains = 2.0 + 0.2- win.monitorFramePeriod * 0.75  # most of one frame period left
            if circle_2.status == STARTED and t >= frameRemains:
                circle_2.setAutoDraw(False)
            
            # *respond_text* updates
            if t >= 2.4 and respond_text.status == NOT_STARTED:
                # keep track of start time/frame for later
                respond_text.tStart = t
                respond_text.frameNStart = frameN  # exact frame index
                respond_text.setAutoDraw(True)
            frameRemains = 2.4 + 2.0- win.monitorFramePeriod * 0.75  # most of one frame period left
            if respond_text.status == STARTED and t >= frameRemains:
                respond_text.setAutoDraw(False)
            
            # *respond_key* updates
            if t >= 2.4 and respond_key.status == NOT_STARTED:
                # keep track of start time/frame for later
                respond_key.tStart = t
                respond_key.frameNStart = frameN  # exact frame index
                respond_key.status = STARTED
                # keyboard checking is just starting
                win.callOnFlip(respond_key.clock.reset)  # t=0 on next screen flip
                event.clearEvents(eventType='keyboard')
            frameRemains = 2.4 + 2.0- win.monitorFramePeriod * 0.75  # most of one frame period left
            if respond_key.status == STARTED and t >= frameRemains:
                respond_key.status = STOPPED
            if respond_key.status == STARTED:
                theseKeys = event.getKeys(keyList=['left', 'right'])
                
                # check for quit:
                if "escape" in theseKeys:
                    endExpNow = True
                if len(theseKeys) > 0:  # at least one key was pressed
                    respond_key.keys = theseKeys[-1]  # just the last key pressed
                    respond_key.rt = respond_key.clock.getTime()
            
            # *outcome_image* updates
            if t >= outcome_time and outcome_image.status == NOT_STARTED:
                # keep track of start time/frame for later
                outcome_image.tStart = t
                outcome_image.frameNStart = frameN  # exact frame index
                outcome_image.setAutoDraw(True)
            frameRemains = outcome_time + 2.0- win.monitorFramePeriod * 0.75  # most of one frame period left
            if outcome_image.status == STARTED and t >= frameRemains:
                outcome_image.setAutoDraw(False)
            # *ISI* period
            if t >= 0.0 and ISI.status == NOT_STARTED:
                # keep track of start time/frame for later
                ISI.tStart = t
                ISI.frameNStart = frameN  # exact frame index
                ISI.start(0.5)
            elif ISI.status == STARTED:  # one frame should pass before updating params and completing
                ISI.complete()  # finish the static period
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in trialsComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # check for quit (the Esc key)
            if endExpNow or event.getKeys(keyList=["escape"]):
                core.quit()
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "trials"-------
        for thisComponent in trialsComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        
        # check responses
        if respond_key.keys in ['', [], None]:  # No response was made
            respond_key.keys=None
        trials_loop.addData('respond_key.keys',respond_key.keys)
        if respond_key.keys != None:  # we had a response
            trials_loop.addData('respond_key.rt', respond_key.rt)
        # the Routine "trials" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
    # completed 1 repeats of 'trials_loop'
    
    # get names of stimulus parameters
    if trials_loop.trialList in ([], [None], None):
        params = []
    else:
        params = trials_loop.trialList[0].keys()
    # save data for this loop
    trials_loop.saveAsExcel(filename + '.xlsx', sheetName='trials_loop',
        stimOut=params,
        dataOut=['n','all_mean','all_std', 'all_raw'])
    
    # ------Prepare to start Routine "rest"-------
    t = 0
    restClock.reset()  # clock
    frameN = -1
    continueRoutine = True
    # update component parameters for each repeat
    rest_key_resp_1 = event.BuilderKeyResponse()
    # keep track of which components have finished
    restComponents = [rest_image_1, rest_key_resp_1]
    for thisComponent in restComponents:
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    
    # -------Start Routine "rest"-------
    while continueRoutine:
        # get current time
        t = restClock.getTime()
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *rest_image_1* updates
        if t >= 0.0 and rest_image_1.status == NOT_STARTED:
            # keep track of start time/frame for later
            rest_image_1.tStart = t
            rest_image_1.frameNStart = frameN  # exact frame index
            rest_image_1.setAutoDraw(True)
        
        # *rest_key_resp_1* updates
        if t >= 5.0 and rest_key_resp_1.status == NOT_STARTED:
            # keep track of start time/frame for later
            rest_key_resp_1.tStart = t
            rest_key_resp_1.frameNStart = frameN  # exact frame index
            rest_key_resp_1.status = STARTED
            # keyboard checking is just starting
            win.callOnFlip(rest_key_resp_1.clock.reset)  # t=0 on next screen flip
            event.clearEvents(eventType='keyboard')
        if rest_key_resp_1.status == STARTED:
            theseKeys = event.getKeys(keyList=['y', 'n', 'left', 'right', 'space'])
            
            # check for quit:
            if "escape" in theseKeys:
                endExpNow = True
            if len(theseKeys) > 0:  # at least one key was pressed
                rest_key_resp_1.keys = theseKeys[-1]  # just the last key pressed
                rest_key_resp_1.rt = rest_key_resp_1.clock.getTime()
                # a response ends the routine
                continueRoutine = False
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in restComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # check for quit (the Esc key)
        if endExpNow or event.getKeys(keyList=["escape"]):
            core.quit()
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "rest"-------
    for thisComponent in restComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # check responses
    if rest_key_resp_1.keys in ['', [], None]:  # No response was made
        rest_key_resp_1.keys=None
    blocks.addData('rest_key_resp_1.keys',rest_key_resp_1.keys)
    if rest_key_resp_1.keys != None:  # we had a response
        blocks.addData('rest_key_resp_1.rt', rest_key_resp_1.rt)
    # the Routine "rest" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 3 repeats of 'blocks'

# get names of stimulus parameters
if blocks.trialList in ([], [None], None):
    params = []
else:
    params = blocks.trialList[0].keys()
# save data for this loop
blocks.saveAsExcel(filename + '.xlsx', sheetName='blocks',
    stimOut=params,
    dataOut=['n','all_mean','all_std', 'all_raw'])

# ------Prepare to start Routine "thankyou"-------
t = 0
thankyouClock.reset()  # clock
frameN = -1
continueRoutine = True
# update component parameters for each repeat
key_resp_finish = event.BuilderKeyResponse()
# keep track of which components have finished
thankyouComponents = [thank_you_image, key_resp_finish]
for thisComponent in thankyouComponents:
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED

# -------Start Routine "thankyou"-------
while continueRoutine:
    # get current time
    t = thankyouClock.getTime()
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *thank_you_image* updates
    if t >= 0.0 and thank_you_image.status == NOT_STARTED:
        # keep track of start time/frame for later
        thank_you_image.tStart = t
        thank_you_image.frameNStart = frameN  # exact frame index
        thank_you_image.setAutoDraw(True)
    
    # *key_resp_finish* updates
    if t >= 10 and key_resp_finish.status == NOT_STARTED:
        # keep track of start time/frame for later
        key_resp_finish.tStart = t
        key_resp_finish.frameNStart = frameN  # exact frame index
        key_resp_finish.status = STARTED
        # keyboard checking is just starting
        win.callOnFlip(key_resp_finish.clock.reset)  # t=0 on next screen flip
        event.clearEvents(eventType='keyboard')
    if key_resp_finish.status == STARTED:
        theseKeys = event.getKeys(keyList=['y', 'n', 'left', 'right', 'space'])
        
        # check for quit:
        if "escape" in theseKeys:
            endExpNow = True
        if len(theseKeys) > 0:  # at least one key was pressed
            key_resp_finish.keys = theseKeys[-1]  # just the last key pressed
            key_resp_finish.rt = key_resp_finish.clock.getTime()
            # a response ends the routine
            continueRoutine = False
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in thankyouComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # check for quit (the Esc key)
    if endExpNow or event.getKeys(keyList=["escape"]):
        core.quit()
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "thankyou"-------
for thisComponent in thankyouComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if key_resp_finish.keys in ['', [], None]:  # No response was made
    key_resp_finish.keys=None
thisExp.addData('key_resp_finish.keys',key_resp_finish.keys)
if key_resp_finish.keys != None:  # we had a response
    thisExp.addData('key_resp_finish.rt', key_resp_finish.rt)
thisExp.nextEntry()
# the Routine "thankyou" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()
# Close serial port
serial.close()



# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
