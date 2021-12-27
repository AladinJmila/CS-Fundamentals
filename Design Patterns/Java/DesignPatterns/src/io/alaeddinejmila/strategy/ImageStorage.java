package io.alaeddinejmila.strategy;

public class ImageStorage {
    private Compressor compressor;
    private Filter filter;
    public void store(String fileName, Compressor compressor, Filter filter) {
       compressor.compress(fileName);
       filter.applyFilter(fileName);
    }
}
