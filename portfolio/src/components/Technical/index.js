import React from 'react'
import './style.css'

function Technical() {
    return(
        <div className='tech'>
            <div className="container text-center">
                <h3 className='text-center'>Technical Skills</h3>
                
                <img className='logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSl9NPufhUuuJgR24qUmk18ALrkRpJ4-x3wbEnCumU0vA8W4ItW3of7Gj3wV0SyJQah0WycHDqHYHtccMGIOlVrmFhALx0Oto7LtA&usqp=CAU&ec=45699845"></img>
                <img className='logo' src='data:image/png;base64,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'></img>
                <img className='logo' src='https://malakian75s.github.io/static/media/es6.1f0e4175.svg'></img>
                {/* <img className='logo' src='data:image/jpeg;base64,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'></img> */}
                <img className='logo' src='https://i0.wp.com/www.disk91.com/wp-content/uploads/2018/02/mongodb-1.png?fit=413%2C484&ssl=1'></img>
                <img className='logo' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEUyMjL///8uLi4SEhImJiYpKSkcHBwXFxcICAj19fUjIyPu7u4fHx/c3Ny9vb0aGhqmpqZVVVXHx8fj4+NtbW1dXV2RkZHW1tY+Pj60tLR4eHiFhYWenp7Nzc1nZ2dISEjH8ZytAAAOrUlEQVR4nO2d16KqOhCGITSBUERAQJT3f8udCS2QUEUF1v5vzj4rUr60mUwKknx2Sb9+gY/rP+EWsp0gzeNHGF2LIkmSorhG4SPO08Cxv/D0jxKajhuHha4YOrZUDbHSVAvrhqIXYew65idf4mOE9zRLsIEJmDQmgkp+lWTp/VMv8hHCex5ZBp5g63Jiw4ryj1BuTminIfas+XAMpuXhMN28aW5LePOvpOxW0NUiZXn1b5u+04aEdlooqwqvX5RKsWVJbkYYhDp+H6+CxHoYbPVi2xDaueS9Uzl5aZ6Ub1OQWxA6mW5tilfK0jNng7d7n/AZKdsWXytNiZ4/J3xeja1an0jIuL7L+B7hh/k2YXyH0Ik+zlcyRu+0x/WE5kP5Bh9lVLL1zvlqQt9Qv8QHUg3/y4T3Qv8iH0gvVvrl6wgfl29V0Fbo8vga4VP6hIGfliWt6VVXEH6vh+kLKSuKcTGhk/ymAEtZyWLDsZTQ/1kBlkKLO9VlhObL+ykfyHsts42LCG/SN23gkFRpURBgCaH74xpaCynuZwhz5ddojZT8E4Th75tgKy/cnNC8/tJI8LKuc/ubmYR28qlx/FppycwwzjzCG9pHH8MKoXld6ixCR90fIEFUZ/k3cwidrwzllwsZcxBnEDqbRXq3FsIzEKcJ91qCoDmlOEl422UbrIXUye5mitDeYS/KCqEpozFBaCb7BiSIyYTpnyC87s3Q89Ku7xCG+3LVxLLGfdRRwvjbIcN10uO1hO5+hkvjGh0vjhDejgJIEEdsxgihtPdutBUawxhMee0hJjNX6ms5ob+nIf20vMEg4xChY/z6nRdq0EMdIty9L9MXSpYRPo5g6ruyBuY0xITP4xiKVop4ZkpMeCBD0WrAZAj/esA6ChLXUxHh/fLrd12pi2giXERYHLGOglAxj9A/xohCJF1g93lC82i2npXBD/h5wseR/NG+VL6z4QidI5rCVgrnvHGE0VG7mVIomiI8pDfDivNs+oTXYxchKcR+6K1HePgi5AuxR3j4IuQLsUv4PLItrGU8RwgP3pGW6nWnHcKD28JaXZvYIcz2P0sxR1o2RGgf1+XuSrcHCPNjDnx5WfkA4a9fbEOJCYNjxYDH5AVCwvAc/QxIC0WEp+lnQExf0xKm+NevtaFwKiA8bPxJJCYm1RAeaD50jto504bQP4sxLGX5HOEJxk2s2jFUTWifYdzEyrB7hKfqSUFNb1oTnsjcl2qMfk14tiIkhdglvJ/HJ63l3TuEpxk4taqHUBXhKQI0XdXhmorwfEXYNMSS8HCrZ+bIuDOEp7OGICtlCE8SZOuqCrmVhCMroJBmES041aq+Tp1/GX2GKs5leh/xiWEjSTQ5aQnNwUqqKkWW+36eJe0RLaqicL9HikKbMi6TELZese/7j6vX2Y5iKOUEM7J0xahvaBnXB/ltHkrczg7VSEKalhWKNTupFjYbwqGOBnlxM8xysur5qs+vHkaSKdvkjbEruxh2XDdDbDNlNu8TbzhWYR9IkT9tOaCZoartWUL3sMOo4fbxsp2zhTyS1KpczCeNdDQ4gmff3DR14R9OoTYXZt1suzjl8IsQBrqkwLprOyCX0d4sbpbnKCYQelHZyT0hMGTQMz0c8ownPOPJrMayIkiynyQtABzzZc1IYt8/bQhj4eIED17UTwwdY90oYCl1uagWCqwb84DFnQ/IJUoIq67dAi7DhvUg7x3UVYQSGvDcZx5GkCXwP2aMDAzPgAOFzKIuDg0WxaaF59G0BEa0oTqZxEqNG0LhwAI/4HiBuhkhBTaJl8NkeAAb9IAFui4tKCC8pLLZHlxDgYJLS3gJyI8lA45RJH+ARLXOf6RkzB4WZMpme8AP0mFHpTSZxKocXlBCURAKnJ4ne8CHRorOLLNCJy5f2rRdWDF3K+s5EEayKbE5BruSc1wTPkiGZ/WecJUQpewSM+vaTICp5LIrWzAIybSRjyZ1EYqGUBQpVWz51u2AYHNK1WIvT6YpKvcmj6CncfobbS5ubY4IIXm5V/MuCDKx81srqxf0kKFB0H0+JtdqE0ld6TWhLQizwdKbvpWENVX1m9gNFTTCmpYQ3uS0n2GWKbt6RWjLjyaZ9ARmv/kogWzTHDBuct5NBPtGRwgjSb2b2RWhyFh4N9nlxoxGM8yCQE9ZxGrI1FgM/RF3LxjHSBWhfG+zUxeM2qBmUQ+LYPQ7QKjk6nhSD8KpCAO+lgIBH33T3abmQj+UKlUjbF4aCPmMkayquwbCV3NXjdyC/63ilO+jP2W3l/P603xo40m9vwYVocAcWr6o7oKnl9RvQmAylRrHtjYDoeBJ3rM0foTQbNsdef5TkBu5bCrlf+X+Fnm9dKxGkrqiBhEIBQN80pgF3FDdwxqH1BU5UXzKyRIm3GXQ+dHGRQiZ+qLbIkMMfXjZwkkHUehip3MkiRUd5ktigy+u17C4sWnjgOu8WLNREgoWGKNX2RDJXZnQurh3kNQqF8GUELMuOg91JKn7u7giFNQr0o9fLwI5zCtadHTSWb+B3b6JKe+WlK269NrqP5KmroqeYVYvVLpmtzSTFL23GXkkiRUdPwFhyP1GuJy4VMo40uBydfYJE0Jh1M4qe5gu4fDGyCrLieNfOuV2kEdq5/jQkST2V2FFyNcVbvmbkBBMvfxi704InQFCMAEdwu6aEBEh+HxXv16d/sw6R6iNJLUYUUXImwUg9EQ16HJpAcHUk4xkC3GkDEWEpvgRFybTkOVdUFay2K9O5zeSxGBQQt4thYYzNWMK/neqdkw4LUPhWLOsKN1a+pq9+kOzDJQByYPjGEmqGhsQCmIYeDJ2U5p66G2YfXyEUOQCQl4mHGGxaN5ZYwY3c5PGCIlHl4sGjUYzZqn8bcNlmyJYCwEheC+VT8NaJvGwDRm0FljcsdIwuLkb40m9WyXDhMQxEvgbUnKzq6zSa3/bs8loqb4BEApsHPEtbh5HSFwGwcQziuwbAqcq5bp42PUznrSAEGwlX4ZQFmWuQyMsfUOogU1TBEKBh0RqRIo5QuDm3QNc+otCfI3m30jSAkJI450aUjPLkkVklF2vv8EkM/L6365oyQOMtanD3SUEa8U3HsOmBok4rXfuRjq9z0hSn6IY7EtpSNzuZzCYl7L/udyZq2BhddUU6eiJa1xkuFD2P712SIqWW1cO41K4M1QiLucxxRhJGiIUdVBAk/daonKr3hSiGMwOPs2sXRuwFlzVg0Iu60OPEGh6QTuEzXopNh+zhLpA0UaSuner7aFwag06yawzcIRoBC0frYk8VbcnueHUkSj32UmDmGQzxu4R0qFX0Qm4tBERnbiEcbd7JDlMm8BIUo+w9ml4vxSk2p2jSjWIi6VQqoiUmd2xr9Cx0qYIkagEcripqDR+Vmdvn5D2BK82CqxiAhhXpUqeIseMN6bCXFJZE0eSuoS1XyoYW0jV2Tb3SMGqqlq6kdl1VFC5c00XIsIvrYomEiQ7M3SLXIcVehh3HZrqE0oaNBS3KJ/h4YcJJzA3+BDzeClwIwsbWmw2PdpIUkfN2EIcECZlBUGAm5vHsf+E0UpOHw6NMO65SFAY0BRpRBjDfc3Aj+PchYC004zHOUJJoyeu3lLyjJRuIngYzE0hzYbn5y4N0D+86SRWzfhwcBJfeTHbTt2knHQhJR9wVR7GpDe1iuqryG+3ATpZW9MVmfOUSC1uJyDMFHVbJfvpADtlzhYdSWLUjPGH50eRlzzSIAjc/GXV0e9EEt1OpQklIXzWIMpdcl36SCa/CqF5RQzPSPMI919EI8/3yY1c/1HoeG5SoyZOI4i1tYyapes6nnngV00Ic3uYXDdvArH8rfgZ5PkkEVuCxJGkSk2sbbtZ/JZwF2ripaIBzzrtjLCJeQvnLVZpZ4TNvMV2C6D3RcjMPW22MHFnhO384YDJX659ETJzwJstGNoXITOPv5m5IITP/RAyazGG19MslPZIxW78T8Ssp9nuVCjN2g8guybqD6xrO//aREE09fjqrC89/xrhP7DO+/xr9c+/3+L8e2b+wL6n01lEbu/a+fcfnn8P6R/YB3z+vdzn349/rt5UeKbC+c/FOJPRF59t8gfOpznRGUNIFhOeZgg1eE7UafqawbO+zhJyGz6v7Q+cuXeOcM3YuYl/4OzLM4yhxs8v/QNn0B6/EKfOET5+SzSmzoI+enc6fZ730W3ijDPZz3+u/h/4NsL5v29x4JjU3G+U/IHvzJz/W0Hy+b/3dEz3dNE3u45YT5d9d+0PfDvveCe4Lf7+4fm/YfkHvkN6KJOx7luyR5ozXfk94PN/0/kPfJf7D3xbXe4f27VHacOnlMwhNHfv29D9pG8QyjbaNyLdy/sWoXybufXwN0LqiJ2YSUg81P0iokFvdAmh7OC9IiI8DTiHcLelOKcE5xHKzi7bIlLnAM4jlG877FERmuxkFhDKdv8Uv59LS6bMxDJC2bzuy4GzrhOGfjEh8VH3NOjXx33RdYRyvp/BlJJPv+4KQjJe3Ed/g0bHg+8QyjfxARtflirN60TXEMrm6/eN0XvN7WPWEMIBOb+tqcgYDBtuRCg7yS/NhpXM8mPeIuwcHvVlIWVgbmJjQvkp/aYYLUk8u7Q9ISlG8YmoHxW6rCjA1YTyvfh2oFEvRFPYnyOETvWbtlFd3IW+Tyib3+txkJIts4HbEBLDEX3FOCIjWmwiNiIkver144zIuK7pQbci/Djj23zvExLGSHRo/ybSlOhdvi0I4eBA/RMugKVn77S/WlsQwheXpMnTA5dJ86R8ZiBmQtsQEgWhvlnkGGE9DKYfOU+bEcIJlIXCnbS9As9SinSb4qPakJDo5l+Nt0oSYePqLxrCT2pbQhlKMtS9VUWJLE8Ptyy9UpsTgu55ZBl4wRcFkYYNK8pX+tbj+ggh6J5mCTbw8OcJazaV/CrJ0o/QgT5GCDKdNA4LXTHgHFUNsdJUC+uGohdhnDrr3eoZ+ihhJdsJ0jx+hNG1KJIkKYprFD7iPA2czRudQN8g/K3+Ex5f/wA6uNXJYTcHcgAAAABJRU5ErkJggg=='></img>
                <img className='logo' src='https://mildaintrainings.com/wp-content/uploads/2017/11/react-logo.png'></img>
                <img className='logo' src='data:image/png;base64,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'></img>           

            </div>
        </div>
    )
}

export default Technical;