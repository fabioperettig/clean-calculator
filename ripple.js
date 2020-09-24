const buttons = document.querySelectorAll('button');
            buttons.forEach(btn => {
                btn.addEventListener('click', function(e) {

                    let x = e.clientX - e.target;
                    let y = e.clientY - e.target;

                    let ripples = document.createElement('span');
                    ripples.style.left = x;
                    ripples.style.top = y;
                    this.appendChild(ripples);

                    setTimeout(() => {
                        ripples.remove()
                    },1000);
                })
            })