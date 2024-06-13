---
title: IVPN for Linux - Open-source VPN app for Linux
description: IVPN for Linux offers you comprehensive privacy leak protection with the IVPN firewall, automatic connection on insecure Wi-Fi and Multi-hop.
h1: IVPN for Linux
subtitle: Supports 64-bit Linux 3.10+
url: /en/apps-linux/
aliases: ['/apps-linux/']
params:
  translated: true
platform: linux
layout: apps-single
imageLight: /images-static/uploads/apps/linux-app-3.3.7-light@2x.png
imageDark: /images-static/uploads/apps/linux-app-3.3.7-dark@2x.png
contents:
- item:
    title: Features
    anchor: features
- item:
    title: Packages
    anchor: packages
- item:
    title: Install from IVPN Repository
    anchor: install
    subitems:
    - item:
        title: Ubuntu
        anchor: ubuntu
    - item:
        title: Debian
        anchor: debian
    - item:
        title: Mint
        anchor: mint
    - item:
        title: Fedora
        anchor: fedora
    - item:
        title: CentOS
        anchor: centos
    - item:
        title: Arch Linux
        anchor: arch
    - item:
        title: Fedora Silverblue
        anchor: silverblue
- item:
    title: Install from Binaries
    anchor: binaries
- item:
    title: Install from Source Code
    anchor: source
- item:
    title: Install the Snap
    anchor: snap
- item:
    title: Useful Links
    anchor: useful-links
---
## Features {#features}

* WireGuard or OpenVPN protocols.
* GUI or CLI (command-line interface).
* WireGuard privacy controls - Define automatic key and IP address rotation schedule.
* AntiTracker that blocks ads, adware, malicious websites and data harvesting trackers.
* Firewall / kill switch - Ability to configure as on-demand or always-on. Offers comprehensive protection against DNS, IPv6, disconnection and WebRTC leaks.
* Ability to define trusted Wi-Fi networks and create rules for automatic VPN connection/disconnection.
* Multi-hop VPN routes. Connect through multiple servers in separate jurisdictions for enhanced privacy.
* Allow LAN traffic when connected to VPN.
* Pause VPN for when disabling VPN connection temporarily is required.
* Obfsproxy option to circumvent censorship.
* Custom DNS servers, with DoH.
* Split Tunnel to allow designated apps to bypass the VPN tunnel.

## Packages {#packages}

### Base Package  

Base package contains everything you need to connect to IVPN with command line interface. IVPN GUI app is provided as a separate package you can find below.  
[Changelog](https://github.com/ivpn/desktop-app/blob/master/CHANGELOG.md)  

### IVPN GUI App  

Please note: base package is required to be installed prior to installing GUI app.  
[Changelog](https://github.com/ivpn/desktop-app/blob/master/CHANGELOG.md)  

## Install from IVPN Repository {#install}

### Ubuntu {#ubuntu}

```pkgconfig
# Add IVPN's GPG key
curl -fsSL https://repo.ivpn.net/stable/ubuntu/generic.gpg | gpg --dearmor > ~/ivpn-archive-keyring.gpg

sudo mv ~/ivpn-archive-keyring.gpg /usr/share/keyrings/ivpn-archive-keyring.gpg

# Set Appropriate Permissions for GPG key
sudo chown root:root /usr/share/keyrings/ivpn-archive-keyring.gpg && sudo chmod 644 /usr/share/keyrings/ivpn-archive-keyring.gpg

# Add the IVPN repository
curl -fsSL https://repo.ivpn.net/stable/ubuntu/generic.list | sudo tee /etc/apt/sources.list.d/ivpn.list

# Set Appropriate Permissions for Repository
sudo chown root:root /etc/apt/sources.list.d/ivpn.list && sudo chmod 644 /etc/apt/sources.list.d/ivpn.list

# Update APT repo info
sudo apt update

# To install IVPN software (CLI and UI)
sudo apt install ivpn-ui

# To install only IVPN CLI
sudo apt install ivpn
```

### Debian {#debian}

```pkgconfig
# Add IVPN's GPG key
curl -fsSL https://repo.ivpn.net/stable/debian/generic.gpg | gpg --dearmor > ~/ivpn-archive-keyring.gpg

sudo mv ~/ivpn-archive-keyring.gpg /usr/share/keyrings/ivpn-archive-keyring.gpg

# Set Appropriate Permissions for GPG key
sudo chown root:root /usr/share/keyrings/ivpn-archive-keyring.gpg && sudo chmod 644 /usr/share/keyrings/ivpn-archive-keyring.gpg

# Add the IVPN repository
curl -fsSL https://repo.ivpn.net/stable/debian/generic.list | sudo tee /etc/apt/sources.list.d/ivpn.list

# Set Appropriate Permissions for Repository
sudo chown root:root /etc/apt/sources.list.d/ivpn.list && sudo chmod 644 /etc/apt/sources.list.d/ivpn.list

# Update APT repo info
sudo apt update

# To install IVPN software (CLI and UI)
sudo apt install ivpn-ui

# To install only IVPN CLI
sudo apt install ivpn
```

### Mint {#mint}

```pkgconfig
# Add IVPN's GPG key
curl -fsSL https://repo.ivpn.net/stable/mint/generic.gpg | gpg --dearmor > ~/ivpn-archive-keyring.gpg

sudo mv ~/ivpn-archive-keyring.gpg /usr/share/keyrings/ivpn-archive-keyring.gpg

# Set Appropriate Permissions for GPG key
sudo chown root:root /usr/share/keyrings/ivpn-archive-keyring.gpg && sudo chmod 644 /usr/share/keyrings/ivpn-archive-keyring.gpg

# Add the IVPN repository
curl -fsSL https://repo.ivpn.net/stable/mint/generic.list | sudo tee /etc/apt/sources.list.d/ivpn.list

# Set Appropriate Permissions for Repository
sudo chown root:root /etc/apt/sources.list.d/ivpn.list && sudo chmod 644 /etc/apt/sources.list.d/ivpn.list

# Update APT repo info
sudo apt update

# To install IVPN software (CLI and UI)
sudo apt install ivpn-ui

# To install only IVPN CLI
sudo apt install ivpn
```

### Fedora {#fedora}

```pkgconfig
# Add the IVPN repository
sudo dnf config-manager --add-repo https://repo.ivpn.net/stable/fedora/generic/ivpn.repo

# To install IVPN software (CLI and UI)
sudo dnf install ivpn-ui

# To install only IVPN CLI
sudo dnf install ivpn
```

### CentOS {#centos}

```pkgconfig
# Install Yum-utils
sudo yum install yum-utils

# Add the IVPN repository
sudo yum-config-manager --add-repo https://repo.ivpn.net/stable/centos/generic/ivpn.repo

# To install IVPN software (CLI and UI)
sudo yum install ivpn-ui

# To install only IVPN CLI
sudo yum install ivpn

# Required for CentOS 8
sudo yum install libXScrnSaver
```

### Arch Linux {#arch}

AUR - ArchLinux User Repository. Can be used by distributions based on ArchLinux: (e.g. ArchLinux, Manjaro ...)

Base package: [ivpn](https://aur.archlinux.org/packages/ivpn/)  
UI package: [ivpn-ui](https://aur.archlinux.org/packages/ivpn-ui/)  

Using a AUR helper/Pacman wrapper  automates the installation process:

```pkgconfig
yay -S ivpn
yay -S ivpn-ui
```

Note: Other AUR helper/Pacman wrapper utilities are available.

### Fedora Silverblue {#silverblue}

IVPN client can be installed on [Fedora Silverblue](/knowledgebase/linux/fedora-silverblue/).

## Install from Binaries {#binaries}

### .DEB

[Base package](https://repo.ivpn.net/stable/pool/ivpn_3.14.14_amd64.deb)  
SHA256: 123cc46bd12baede70fbf3e8db013ee248fe1faa9090af9ff3c6a8dcc60cc27d  

[UI package](https://repo.ivpn.net/stable/pool/ivpn-ui_3.14.2_amd64.deb)  
SHA256: 9cc74190cc567d4f6d813311c9fcba51695280c9776754150a251032f36ee941  

### .RPM

[Base package](https://repo.ivpn.net/stable/pool/ivpn-3.14.14-1.x86_64.rpm)  
SHA256: e65c72e34f75dcac0e4113584fb0687c2852fa5bdea03bde287a0344147297e1 

[UI package](https://repo.ivpn.net/stable/pool/ivpn-ui-3.14.14-1.x86_64.rpm)  
SHA256: cadddb72584b75e5ca6d2df8de5424e3e3bad9547b02a675ff6e14713311f15c 

## Install from Source Code {#source}

[Daemon + CLI](https://github.com/ivpn/desktop-app#compilation_linux_daemon)  
[UI](https://github.com/ivpn/desktop-app#compilation_linux_ui)  

## Install the Snap {#snap}

Get the IVPN App from the [Snap Store](https://snapcraft.io/ivpn) by typing `sudo snap install ivpn`.  

<p>
    <a href="https://snapcraft.io/ivpn">
        <img class="features__image--light" src="/images-static/uploads/snap-store-white@2x.png" alt="Get it from the Snap Store" width="182">
        <img class="features__image--dark" src="/images-static/uploads/snap-store-black@2x.png" alt="Get it from the Snap Store"  width="182">
    </a>
</p>

### Snap Notes:

* The [snapd](https://snapcraft.io/docs/installing-snapd) daemon is required.
* Uninstall prior versions (DEB, RPM, etc.) of the IVPN App before switching to the snap release channel and vice versa.
* The **Split Tunnel** feature is not available due to strong restrictions of the snap environment.

## Useful Links {#useful-links}

If you prefer not to use the IVPN app please follow the relevant setup guide below.

* [WireGuard using terminal](/setup/linux-wireguard/)
* [WireGuard using NetworkManager](/setup/linux-wireguard-netman/)
* [OpenVPN using terminal](/setup/linux-terminal/)
* [OpenVPN using NetworkManager](/setup/linux-netman/)
* [IPSec with IKEv2](/setup/linux-ipsec-with-ikev2/)
