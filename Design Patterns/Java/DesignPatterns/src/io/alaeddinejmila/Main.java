package io.alaeddinejmila;


import io.alaeddinejmila.strategy.BlackAndWhiteFilter;
import io.alaeddinejmila.strategy.ImageStorage;
import io.alaeddinejmila.strategy.JpegCompressor;
import io.alaeddinejmila.strategy.PngCompressor;


public class Main {

    public static void main(String[] args) {
        var imageStorage = new ImageStorage();
        imageStorage.store("a",
                new JpegCompressor(), new BlackAndWhiteFilter());
        imageStorage.store("a",
                new PngCompressor(), new BlackAndWhiteFilter());
    }


}

