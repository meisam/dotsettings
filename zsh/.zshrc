# Lines configured by zsh-newuser-install
HISTFILE=~/.histfile
HISTSIZE=5000
SAVEHIST=1000
bindkey -v

_newline=$'\n'
_lineup=$'\e[1A'
_linedown=$'\e[1B'

PROMPT="%F{white}%m:%F{brgreen}%d${_newline}$ "
RPROMPT="%{${_lineup}%}%D %@%{${_linedown}%}"

# End of lines configured by zsh-newuser-install
# The following lines were added by compinstall

zstyle :compinstall filename '~/.zshrc'
fpath=(~/.zsh/completiion $fpath)
autoload -Uz compinit && compinit -i
compinit

zstyle -e ':completion:*:(ssh|scp|sftp|rsh|rsync):hosts' hosts 'reply=(${=${${(f)"$(cat {/etc/ssh_,~/.ssh/known_}hosts(|2)(N) /dev/null)"}%%[# ]*}//,/ })'

# End of lines added by compinstall
bindkey "^R" history-incremental-search-backward
bindkey "^[[A" history-beginning-search-backward
bindkey "^[[B" history-beginning-search-forward
bindkey '^P' up-history
bindkey '^N' down-history
bindkey '^?' backward-delete-char
bindkey '^h' backward-delete-char
bindkey '^w' backward-kill-word
bindkey '^r' history-incremental-search-backward

export VISUAL=vim
autoload edit-command-line; zle -N edit-command-line
bindkey -M vicmd v edit-command-line
