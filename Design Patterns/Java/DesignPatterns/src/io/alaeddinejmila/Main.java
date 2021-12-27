package io.alaeddinejmila;

import io.alaeddinejmila.memento.Editor;
import io.alaeddinejmila.memento.History;
import io.alaeddinejmila.state.BrushTool;
import io.alaeddinejmila.state.Canvas;
import io.alaeddinejmila.state.SelectionTool;

public class Main {

    public static void main(String[] args) {
       var canvas = new Canvas();
       var tool = new BrushTool();
       canvas.setCurrentTool(tool);
       canvas.mouseDown();
       canvas.mouseUp();
    }


}

