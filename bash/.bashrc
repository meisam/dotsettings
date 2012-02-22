# .bashrc

# This is a hack for now.  If this shell is not a login shell then we need
# to grab settings out of /etc/profile (which is also used for ksh).
if [ "$0" != "-bash" ]; then
	. /etc/profile
fi

export PS1="[\u@\h \W]\\$ "

# Find the printer.
eval `/usr/local/sbin/findprinter -s`

#stty erase ^?

# alias settings
alias q=exit
alias l=ls\ -al

# User specific aliases and functions
PATH=/home/1/fathi/bin:$PATH;
export PATH
