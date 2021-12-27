package io.alaeddinejmila;


import io.alaeddinejmila.state.Canvas;
import io.alaeddinejmila.state.EraserTool;


public class Main {

    public static void main(String[] args) {
       var canvas = new Canvas();
       var tool = new EraserTool();
       canvas.setCurrentTool(tool);
       canvas.mouseDown();
       canvas.mouseUp();
    }


}

