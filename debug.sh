#!/bin/bash
cd `dirname $0`
./init.zs \
-zhscript-o-ansi \
-zhscript-o-args \
-zhscript-o-tree \
-zhscript-o-path \
-zhscript-o-lc \
-zhscript-o-lc2 \
"$@"