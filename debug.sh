#!/bin/bash
d=`dirname $0`
cd $d/root
../bin/zsp \
-zhscript-o-ansi \
-zhscript-o-args \
-zhscript-o-tree \
-zhscript-o-path \
-zhscript-o-lc \
---- -r $PWD/ -a :4001 "$@"