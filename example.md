## UTEK 2018 Programming

![utek logo](resources/logo.svg)

2018-01-13 / 2018-01-14

---

### This year's competition will use:

- String processing
- Discrete optimization

---


### Before the competition

#### Required
- Register if you haven't
- Install git

#### Optional
- [Create a Github account](https://github.com/)
- [Create a Google cloud account. Required if you don't have ECF access](https://console.cloud.google.com/freetrial?page=0)

Note:
Ask who is not in engineering

--

### Creating a Google Cloud account
- Go to the [Google cloud page](https://console.cloud.google.com/compute/instances)
- Create a project and an instance, using the default settings EXCEPT use an f1 instance (the free tier :) )
- Go to VM instances, click Connect. This will open an SSH shell
- You will need a credit card to set this up

--

#### OS details
- Debian 6.3.0
- Python 2.7.13 and 3.5.3 are installed by default

#### Required
- Install git with `sudo apt-get install git`

If you install anything else, you must provide install instructions so that I can reproduce your results.

--

- You can sync your files to the VM using:
    - Git (recommended)
    - Or you can use [Google's cloud storage](https://cloud.google.com/storage/docs/object-basics)

- Documentation
    - https://cloud.google.com/compute/docs/instances/create-start-instance
    - https://cloud.google.com/compute/docs/instances/connecting-to-instance
