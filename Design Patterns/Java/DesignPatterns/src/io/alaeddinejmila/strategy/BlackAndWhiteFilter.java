package io.alaeddinejmila.strategy;

public class BlackAndWhiteFilter implements Filter {
    @Override
    public void applyFilter(String fileName) {
        System.out.println("Applying B&W filter");
    }
}
