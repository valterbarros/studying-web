#! /bin/bash

# Remove space from directory names
for dir in $0/* ; do mv "${dir}" "${dir//[[:space:]]/-}"; done
