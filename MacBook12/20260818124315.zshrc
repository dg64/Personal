eval "$(starship init zsh)"

# Lines configured by zsh-newuser-install
HISTFILE=~/.histfile
HISTSIZE=1000
SAVEHIST=1000
bindkey -v

# End of lines configured by zsh-newuser-install

# zsh autocomplete
#source /usr/share/zsh/plugins/zsh-autosuggestions/zsh-autosuggestions.zsh
#source /usr/share/zsh/plugins/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
#source /usr/share/zsh/plugins/zsh-autocomplete/zsh-autocomplete.plugin.zsh

# Setting FZF

source <(fzf --zsh)

# Setting fzf-git.sh
source ~/packages/fzf-git.sh/fzf-git.sh

# Setting fd
export FZF_DEFAULT_COMMAND="fd --type f --color=always --exclude .git --ignore-file ~/.gitignore"
export FZF_CTRL_T_COMMAND=$FZF_DEFAULT_COMMAND
export FZF_ALT_C_COMMAND="fd --type d --hidden --strip-cwd-prefix --exclude .git"
export FZF_DEFAULT_OPTS="--exact --ansi"
export FZF_CTRL_T_OPTS="--preview 'bat -n --color=always --line-range :500 {}'"
export FZT_ALT_C_OPTS="--preview 'eza --tree --color=always {} | head -200'"

# --- Exports
export LDFLAGS="-L/usr/local/opt/readline/lib"
export CPPFLAGS="-I/usr/local/opt/readline/include"

export EDITOR=nvim
export BAT_THEME="tokyonight_night"

export PATH=/usr/local/mysql/bin:$PATH
# --- Aliases
alias nv='nvim'
alias ll="ls -l"
alias ls="eza --icons=always"

# --- login
fortune | cowsay -f eyes | lolcat 
remind ~/.reminders | lolcat

_fzf_compgen_path() {
	fd --hidden --exclude .git . "$1"
}

_fzf_compeng_dir() {
	fd --type d --hidden --exclude .git . "$1"
}

_fzf_comprun() {
	local command=$1
	shift
	case "$command" in
			cd)		fzf --preview 'eza -tree --color=always {} | head -200' "$@";;
			export|unset)	fzf --preview "eval 'echo \$' {}" "$@";;
			ssh)		fzf --preview "dig {}" "$@";;
			*)		fzf --preview "--preview 'bat -n --color=always --line-range :500 {}'" "$@";;
	esac
}
