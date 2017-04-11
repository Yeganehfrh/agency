#!/usr/bin/env python2
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy2 Experiment Builder (v1.84.2),
    on Wed Apr 12 00:06:48 2017
If you publish work using this script please cite the PsychoPy publications:
    Peirce, JW (2007) PsychoPy - Psychophysics software in Python.
        Journal of Neuroscience Methods, 162(1-2), 8-13.
    Peirce, JW (2009) Generating stimuli for neuroscience using PsychoPy.
        Frontiers in Neuroinformatics, 2:10. doi: 10.3389/neuro.11.010.2008
"""

from __future__ import absolute_import, division
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
expName = 'filevich_et_al'  # from the Builder filename that created this script
expInfo = {u'session': u'001', u'participant': u''}
dlg = gui.DlgFromDict(dictionary=expInfo, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath=u'/Users/morteza/Desktop/proposal/filevich psychopy/filevich_et_al.psyexp',
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
    monitor='testMonitor', color=[-1,-1,-1], colorSpace='rgb',
    blendMode='avg', useFBO=True)
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess

# Initialize components for Routine "intro"
introClock = core.Clock()
intro_txt = visual.TextStim(win=win, name='intro_txt',
    text='Hello! The experiment starts after a key press.',
    font='Open Sans',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1,
    depth=-1.0);

# Initialize components for Routine "main_trial"
main_trialClock = core.Clock()
fixation_1 = visual.TextStim(win=win, name='fixation_1',
    text='+',
    font='Open Sans',
    pos=(0, 0), height=0.3, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1,
    depth=0.0);
circle_1 = visual.Polygon(
    win=win, name='circle_1',
    edges=90, size=(0.5, 0.8),
    ori=0, pos=(0, 0),
    lineWidth=1, lineColor=[0.2,0.2,0.2], lineColorSpace='rgb',
    fillColor=[0.2,0.2,0.2], fillColorSpace='rgb',
    opacity=1, depth=-1.0, interpolate=True)
fixation_2 = visual.TextStim(win=win, name='fixation_2',
    text='+',
    font='Open Sans',
    pos=(0, 0), height=0.2, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1,
    depth=-2.0);
circle_2 = visual.Polygon(
    win=win, name='circle_2',
    edges=90, size=(0.5, 0.8),
    ori=0, pos=(0, 0),
    lineWidth=1, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=[1,1,1], fillColorSpace='rgb',
    opacity=1, depth=-3.0, interpolate=True)
fixation_3 = visual.TextStim(win=win, name='fixation_3',
    text='+',
    font='Open Sans',
    pos=(0, 0), height=0.2, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1,
    depth=-4.0);
trial_finished_msg = visual.TextStim(win=win, name='trial_finished_msg',
    text='Press any key for the next trial.',
    font='Open Sans',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1,
    depth=-6.0);

# Initialize components for Routine "finish"
finishClock = core.Clock()
text = visual.TextStim(win=win, name='text',
    text='Thank you!\n\nPress any key to finish the experiment.',
    font='Open Sans',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1,
    depth=0.0);

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# ------Prepare to start Routine "intro"-------
t = 0
introClock.reset()  # clock
frameN = -1
continueRoutine = True
# update component parameters for each repeat
key_resp_2 = event.BuilderKeyResponse()
# keep track of which components have finished
introComponents = [key_resp_2, intro_txt]
for thisComponent in introComponents:
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED

# -------Start Routine "intro"-------
while continueRoutine:
    # get current time
    t = introClock.getTime()
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
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
    
    # *intro_txt* updates
    if t >= 0.0 and intro_txt.status == NOT_STARTED:
        # keep track of start time/frame for later
        intro_txt.tStart = t
        intro_txt.frameNStart = frameN  # exact frame index
        intro_txt.setAutoDraw(True)
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in introComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # check for quit (the Esc key)
    if endExpNow or event.getKeys(keyList=["escape"]):
        core.quit()
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "intro"-------
for thisComponent in introComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if key_resp_2.keys in ['', [], None]:  # No response was made
    key_resp_2.keys=None
thisExp.addData('key_resp_2.keys',key_resp_2.keys)
if key_resp_2.keys != None:  # we had a response
    thisExp.addData('key_resp_2.rt', key_resp_2.rt)
thisExp.nextEntry()
# the Routine "intro" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
main_trials = data.TrialHandler(nReps=8, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=[None],
    seed=None, name='main_trials')
thisExp.addLoop(main_trials)  # add the loop to the experiment
thisMain_trial = main_trials.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisMain_trial.rgb)
if thisMain_trial != None:
    for paramName in thisMain_trial.keys():
        exec(paramName + '= thisMain_trial.' + paramName)

for thisMain_trial in main_trials:
    currentLoop = main_trials
    # abbreviate parameter names if possible (e.g. rgb = thisMain_trial.rgb)
    if thisMain_trial != None:
        for paramName in thisMain_trial.keys():
            exec(paramName + '= thisMain_trial.' + paramName)
    
    # ------Prepare to start Routine "main_trial"-------
    t = 0
    main_trialClock.reset()  # clock
    frameN = -1
    continueRoutine = True
    # update component parameters for each repeat
    key_pressed = event.BuilderKeyResponse()
    key_resp_5 = event.BuilderKeyResponse()
    # keep track of which components have finished
    main_trialComponents = [fixation_1, circle_1, fixation_2, circle_2, fixation_3, key_pressed, trial_finished_msg, key_resp_5]
    for thisComponent in main_trialComponents:
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    
    # -------Start Routine "main_trial"-------
    while continueRoutine:
        # get current time
        t = main_trialClock.getTime()
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *fixation_1* updates
        if t >= 0.0 and fixation_1.status == NOT_STARTED:
            # keep track of start time/frame for later
            fixation_1.tStart = t
            fixation_1.frameNStart = frameN  # exact frame index
            fixation_1.setAutoDraw(True)
        frameRemains = 0.0 + 0.85- win.monitorFramePeriod * 0.75  # most of one frame period left
        if fixation_1.status == STARTED and t >= frameRemains:
            fixation_1.setAutoDraw(False)
        
        # *circle_1* updates
        if t >= 0.85 and circle_1.status == NOT_STARTED:
            # keep track of start time/frame for later
            circle_1.tStart = t
            circle_1.frameNStart = frameN  # exact frame index
            circle_1.setAutoDraw(True)
        frameRemains = 0.85 + 0.2- win.monitorFramePeriod * 0.75  # most of one frame period left
        if circle_1.status == STARTED and t >= frameRemains:
            circle_1.setAutoDraw(False)
        
        # *fixation_2* updates
        if t >= 1.05 and fixation_2.status == NOT_STARTED:
            # keep track of start time/frame for later
            fixation_2.tStart = t
            fixation_2.frameNStart = frameN  # exact frame index
            fixation_2.setAutoDraw(True)
        frameRemains = 1.05 + 0.5- win.monitorFramePeriod * 0.75  # most of one frame period left
        if fixation_2.status == STARTED and t >= frameRemains:
            fixation_2.setAutoDraw(False)
        
        # *circle_2* updates
        if t >= 1.55 and circle_2.status == NOT_STARTED:
            # keep track of start time/frame for later
            circle_2.tStart = t
            circle_2.frameNStart = frameN  # exact frame index
            circle_2.setAutoDraw(True)
        frameRemains = 1.55 + .2- win.monitorFramePeriod * 0.75  # most of one frame period left
        if circle_2.status == STARTED and t >= frameRemains:
            circle_2.setAutoDraw(False)
        
        # *fixation_3* updates
        if t >= 1.755 and fixation_3.status == NOT_STARTED:
            # keep track of start time/frame for later
            fixation_3.tStart = t
            fixation_3.frameNStart = frameN  # exact frame index
            fixation_3.setAutoDraw(True)
        frameRemains = 1.755 + 0.8- win.monitorFramePeriod * 0.75  # most of one frame period left
        if fixation_3.status == STARTED and t >= frameRemains:
            fixation_3.setAutoDraw(False)
        
        # *key_pressed* updates
        if t >= 1.75 and key_pressed.status == NOT_STARTED:
            # keep track of start time/frame for later
            key_pressed.tStart = t
            key_pressed.frameNStart = frameN  # exact frame index
            key_pressed.status = STARTED
            # keyboard checking is just starting
            win.callOnFlip(key_pressed.clock.reset)  # t=0 on next screen flip
            event.clearEvents(eventType='keyboard')
        if key_pressed.status == STARTED:
            theseKeys = event.getKeys(keyList=['y', 'n', 'left', 'right', 'space'])
            
            # check for quit:
            if "escape" in theseKeys:
                endExpNow = True
            if len(theseKeys) > 0:  # at least one key was pressed
                key_pressed.keys = theseKeys[-1]  # just the last key pressed
                key_pressed.rt = key_pressed.clock.getTime()
                # a response ends the routine
                continueRoutine = False
        
        # *trial_finished_msg* updates
        if t >= key_pressed_finished and trial_finished_msg.status == NOT_STARTED:
            # keep track of start time/frame for later
            trial_finished_msg.tStart = t
            trial_finished_msg.frameNStart = frameN  # exact frame index
            trial_finished_msg.setAutoDraw(True)
        
        # *key_resp_5* updates
        if t >= 2.55 and key_resp_5.status == NOT_STARTED:
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
        for thisComponent in main_trialComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # check for quit (the Esc key)
        if endExpNow or event.getKeys(keyList=["escape"]):
            core.quit()
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "main_trial"-------
    for thisComponent in main_trialComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # check responses
    if key_pressed.keys in ['', [], None]:  # No response was made
        key_pressed.keys=None
    main_trials.addData('key_pressed.keys',key_pressed.keys)
    if key_pressed.keys != None:  # we had a response
        main_trials.addData('key_pressed.rt', key_pressed.rt)
    # check responses
    if key_resp_5.keys in ['', [], None]:  # No response was made
        key_resp_5.keys=None
    main_trials.addData('key_resp_5.keys',key_resp_5.keys)
    if key_resp_5.keys != None:  # we had a response
        main_trials.addData('key_resp_5.rt', key_resp_5.rt)
    # the Routine "main_trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 8 repeats of 'main_trials'

# get names of stimulus parameters
if main_trials.trialList in ([], [None], None):
    params = []
else:
    params = main_trials.trialList[0].keys()
# save data for this loop
main_trials.saveAsExcel(filename + '.xlsx', sheetName='main_trials',
    stimOut=params,
    dataOut=['n','all_mean','all_std', 'all_raw'])
main_trials.saveAsText(filename + 'main_trials.csv', delim=',',
    stimOut=params,
    dataOut=['n','all_mean','all_std', 'all_raw'])

# ------Prepare to start Routine "finish"-------
t = 0
finishClock.reset()  # clock
frameN = -1
continueRoutine = True
# update component parameters for each repeat
key_resp_4 = event.BuilderKeyResponse()
# keep track of which components have finished
finishComponents = [text, key_resp_4]
for thisComponent in finishComponents:
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED

# -------Start Routine "finish"-------
while continueRoutine:
    # get current time
    t = finishClock.getTime()
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text* updates
    if t >= 0.0 and text.status == NOT_STARTED:
        # keep track of start time/frame for later
        text.tStart = t
        text.frameNStart = frameN  # exact frame index
        text.setAutoDraw(True)
    
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
    for thisComponent in finishComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # check for quit (the Esc key)
    if endExpNow or event.getKeys(keyList=["escape"]):
        core.quit()
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "finish"-------
for thisComponent in finishComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if key_resp_4.keys in ['', [], None]:  # No response was made
    key_resp_4.keys=None
thisExp.addData('key_resp_4.keys',key_resp_4.keys)
if key_resp_4.keys != None:  # we had a response
    thisExp.addData('key_resp_4.rt', key_resp_4.rt)
thisExp.nextEntry()
# the Routine "finish" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()
# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
