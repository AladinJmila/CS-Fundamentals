package io.alaeddinejmila.iterator;

public interface Iterator<T> {
    boolean hasNext();
    T current();
    void next();
}

