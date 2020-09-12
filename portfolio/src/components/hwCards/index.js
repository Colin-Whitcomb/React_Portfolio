import React from 'react';
import './style.css';
import wip from '../../images/WiP2.jpg';
// import Sushi from '../../images/'

function HomeworkCards() {
    return(
        <div className="container" id="assignments">
            <br/>
            <h2 className="text-right hwHeader">Additional Assignments</h2>
            <hr></hr>
            <br/>
            <div className="row row1">
  
                  {/* SL */}
                  <div class="col-12 col-md-6 col-lg-4 cardDiv">
                    <p><span class='extraWords'><b>Sushi Lover</b></span> allows users to add, list, and "devour" their favorite sushi order. Try it out!</p>
                               
                        <div class="card bg-dark text-white">
                            <img src='https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' className="card-img center-text" id='sushiLoverPic' alt="..."/>
                        </div>

                        <br></br>

                        <a href="https://nameless-bastion-18794.herokuapp.com/" target="_blank" className='text-center'>
                            <button className="btn btn-dark">Deployed Link</button>
                        </a>
                        <a href="https://github.com/Colin-Whitcomb/sushi_lover" target="_blank" className='text-center ml-1'>
                            <button className="btn btn-dark">GitHub</button>
                        </a>
                </div>
            <br></br>
            {/*  */}

                {/* WDS */}
                <div class="col-12 col-md-6 col-lg-4 cardDiv">
                    <p><span class='extraWords'><b>WorkDay Scheduler</b></span> is a great tool to help plan your daily work activities!</p>
                               
                        <div class="card bg-dark text-white">
                            <img src='https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500' className="card-img center-text" id='workDayPic' alt="..."/>
                        </div>

                        <br></br>

                        <a href="https://colin-whitcomb.github.io/work-day-scheduler/" target="_blank" className='text-center'>
                            <button className="btn btn-dark">Deployed Link</button>
                        </a>
                        <a href="https://github.com/Colin-Whitcomb/work-day-scheduler" target="_blank" className='text-center ml-1'>
                            <button className="btn btn-dark">GitHub</button>
                        </a>
                </div>
            <br></br>
            {/*  */}
    


                  {/*  PG */}
                <div class="col-12 col-md-6 col-lg-4 cardDiv">
                    <p><span class='extraWords'><b>Password Generator</b></span> creates a random password with a variety of character options!</p>
                        <div class="card bg-dark text-white">
                            <img src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAsICBYTExYVFRUVDxYPFRUNDQ0WFRYVDw0VHRgfHh0YHRshJjUrISYxJh0dLUAtMTc5PD09HypDSUI6SDU7PDkBDA0NEhASIhMTIj0vKC89PT05OTo/RTpGOkU5OTlAOTk9OT05OTk5OTlCOT05OT85OTpFOTk5OTk9OTk5OTk5Pf/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAADAAECBAUGBwj/xABIEAABBAECAwMHBwoEBAcAAAABAAIDEQQFEgYhMRNBURQiMkJhcZFSVIGTodHSBxUWIyRylLGy4URjwfA0YpLiFzNDU3OEov/EABoBAAIDAQEAAAAAAAAAAAAAAAMEAAECBQb/xAAzEQACAgEDAgIIBgEFAAAAAAAAAQIRAwQSIRMxQWEFIjJRcZHB0RSBobHh8BUjQlJi8f/aAAwDAQACEQMRAD8A8mc2lJrlKcc0EFa7GFyjU0vKa1/NdSMptXYpcGiCdw5Bxr3rqaT0h0I7JRtCefRrK7s3NYzWu5BYznINlLclNRqHmm5vgPjwrHFRQzlKJ9FKlAhL9uQ3c04MgjotBmqvC59khCOJXFP4tRFKmgEsddjXkz3P6oRl9ipNc/wRHSvPcfgmHq6Xsv5GFhT8UNM6+5UXtV3a75J+Ci+Jx9U/BI5ZSyPswySj4lKN1FaMEgVCSEjuUAVnFmlhfYuUFNG/Bktb3hWxntPIELmCUSB9FdKPpfJFUooXekjJ8s3pNx58vis3JlrkiDNBFBMdNlk85rDXykll9I5J+1SGVpYL2LZmvFoRCuTYzo+TggFtpRq+UXyuGBU75JnNpRWOxruEa8hEYx0hpoLj7EKMq/p+oCF117fFVJtK0ahTlUuxOPQJ3C9lD2pm6K+6cQ37Vpz8WOIprT09gWU6eaQ20OdfgCUGLyv2kkOTjplWxuQLLxRHy3WqhV0afM91Fjr9opWv0elHpENRN6XdgOhObuEXRjJFWJ4dji0m6QTS0BfDpkQkkmUIJJJSaoQalLYfBIlTbOQKUZF5jyutBREMq2ZiSCSZqm5q0iDAhNYTgKw3EBF7lTZpKyuCpFqT2AdDaTVpGGCKtYzh3oT40JSMnCVkaUkbbJW+IWli5rGjmQuYY0VzTUF1sXpOeP8A2r5ik9NGaps6+XUmEcqVM5jR0WNjBnrImQ6P1QiP0xkfG0zHQQiu4bMna7pSyHjmjBT2ghc3PkeZ7mMwSxqkVQUbeKQ3spQCVugtWHjko2tmDXS1tc/gscOACYS8+ikoxfcuGSUOYlnJmdKbAJ+hDfiPaLLSwH1iCFqYnEAjAAYCR7E2q6+/Jbt20PcFhSndKPHxDuGLa5Ofre6vqY5YoOjUqKW0ozVitgUgiGJDIQ2qNp2GsCiumw+MBFGGiKy0eIC5MlEjbaHkxxy8SDYNRk07bg+5s5vE8srtwAZXo+5UJtSlebL69yWHLGx36xnaD5K2cHiLHgcHNxQ4jvJH91hxWNVCF/L6jEcks3OTLXz+iOe7Mu583e0AlF8jeBZY6vEilo6hxG+WQvYxsIPqgX9qzn5srxRca8ESLm1yqAyjiVpSb/KvqwBAQyFPsz4p+zHiiVYuCTqewKBCyWIpJk6hAgYUnsWlLByVUs5I7hQCOSymCitYXIbhRRI5KFIce9MK+3AxYpAE8rUdhS2K6IHGG4i7HxQttJBp8Sm2+1XTKbROiUJ7COqmAQlICVJK1ZSdMFaOGCrtV6StYTo21YYkLc0vExXtBleW/Ko0sMRexOGDwVyjKSpOi8c4wlbV+TOh1DEwmsJje/d6vO1z3aBXsPR5ZhccTpB03ClYn4ayYxb8d7ABuc410+KxGSh6rnz5sLkTy1KOOl5J0ZPaNQXDmreweCbsr7kZwbFVJIqKxHGKu0KRm00oIa4Zt8rgMXNW5p2oYTIqlgM0nyrKwImbjSs+TkdwUlB5FX7GoZVhlfF+fJpN1yENe0Ykfn+i4kuLfisYvce5XcWFr5GsdIyEOIDpHHzGe0rYn0vDiNO1Bkn/AMMLnD42QhtwxOrdvns39wtzzq3VL4L7HNgu8FEsceq0M90LXAQyPmbXnOczab93gqRmHtRU4tAWnF1+wEtISBU3yA9yGsuixIwjKAislI/uoinfgbunaNjSRtfLmMgJNOh2O7RnOrJ6K9l4GlxMfWRkSyUewDNm1zq76FALkRzKIGjwS8sMpu97r3Kl9BiOaMY1sV+98l9uoQtaA3GYXAAPkke9+89522APcg5WcZQB2cbA3mOzjDPiRzP0posSRw3Nie8H0XNY4j4gLah4Kz3kAYzmF4Lmte6Nj3AdSGuIK1OeHG7nJJ+b+7IpZZR2rt5JL9kc5z8EtpPUrWOiyAubI+CB0bjE+KWZjZGkdfNFmvahyYsTGu3ZTHOaPMjijke1x7gXODQPtWurjbpO/gm/24/Ux0Z1bVfFpfu0ZvZe1Q2qZePamLx4faiMEbxbYWe9tFaQCq5Ufen5R4OdjlTozciOuaCCr8sdtPsWek8i2seg7RdyJKa0DwQLd4ouL5zwDz5KUz2BxADuRruRpcrffBleq9tGhh69JEwMDI3gejYCfM1ySVpaYom36waLWT2rP+b7FtYp05wHaPy4nes4Njc2/Z3pWaxQ9ar+HI3DJlktu6l58GLTvBTa8jq1aWpNw2geTzSzG/ObJHt5e8LMEo8f5o0JxkrT+fAvODi6fPwBzczYFIKuB4PeFVeKJWZrxRIPwOk4d0A5sc7zPHiswwx0ssgJFPvnY6Vt+1A1/h2XCdHukjnjyGdrjZEZuOVvK/ceY9nMc1ucCZDI8LVHSRidjI8cvxy4tEouTzbHMKjm6ydVlx8dsLccMLcTChjssha4gFxJ61QPQch7yqTbfLI0kuEGxuHsuHT/AC5mRsG0T+SgHtOz7TaH+Fd/uUdJhy9SMvaZfZQ4sfa5WRJ6ETTdUB1PI+HQrufzjgHO8j7SXd5P+ZfJdrfJNlXW7rfd9i5bhVudBJlwY2PjZLoHiHLZLYkmZZHLc4AjzSefyu+0NqPtVbCqc1xbo5vUNCDJ4oYMmLP8o2NifHYAc520Mdfom+6+hWhrPCMeKx958Ek8G0S4TQ4SWSBTT3kXfQchzpX+K9MZFmYjMVjMSfIELpsdr90eDkF4DacOQonu5crrmtfiDCkkwZ5tRxocXKg2NxMuN7N+cSa2lgJsVXXxsAUi8cA+TjsjhZ4bhPbIJBqlNioH9U/c1pafEgu+wqy7gOUaiMHtG26Pyjyqj2Yj2k7iOvUbfeuq4Hma/Ba+Wh+ZsibNr/LMLyP/ANkn6EXFz92mHUXEDIjw5tKc71t7pQIz9oP0lZZaOE0Phh+Y+UtkZDBi2Z86SxGwc6odSTRNdw6npdrW+FjFj+VQ5MWoY4cIZZY7a6Fx6BzTddR33zHLmtPhOPynTs3Aa5seRM6PIx2OIb5QGlpLGknr5lfSPajPwH6bo+TDlbY5s+RjcfE3tc+mkEvNEgChd+xveVRZkaTwWMjFbkvy4MNkkjsdglsAvF0N11zo/AqplcLyQZrMKQtbJJJFEJQS6MiRwAeOQJHPpyPIrrdH1KCHRsZ2VC3KiOeY3sdf6oEO8+h1IAPI9bVLWmzt1zHfI8SsyMnFlxJmgCN8HaN2ge7ofj3q1SM8lfK/J65pkZDk42XNAC+XCa5zcgAdaaSbPMeHULmIcNz/AEYnv/djc7+QXqTcKbE1KfOyJxi4YdJM2Ptv+Kc6PaAIweZ9h52BQXl+bqs0sj3GWXa9znhhkeQwEkgVfdardLwSNUvEEW16tfRSYvH+6Vfs/EqQjHgt2YoaRouwR7eYQSrAb7FGZneBXisNF7kCaVYEormOf81XanJUsjVluHVZ4xtjmlib12Mke1t+NAoj9aynCjkzuHgZpCPhaoN6o/ZofSg3bir+BvqSjwm/mC2X1KcRDxXXcM6HhTxF88214v8AVbg2hfLwJse1b0UejwensfXUWxx+FkpbLrYwk4qMm17kO4tDOcd7aS/vwX6nmmwIzMdzhbWPcPEMJHxpbObq2PFmibEjBjZ6hBa1x59AenKloP8AyhSX5uOyu6yL/kiSy5aTjDv73VGY4cKbU8nb3Ju/O0UA1RnitqM1qmWrvqNnmt1MyAFn5Ee1xH0j3Fas0dOKp50dtDvDkfceiUzQ9X4D2KXPxK2LJteCisx3OBeOdk/7+1VFpYk22J9dQCR7yQP9fsQ8VS9V9lbDZLXK8gHZu72/YpsjsgBhJPotDSS73ABCE7z65UxM8ecHmx5zT38lFJeCJT8TSHD+SQD5Hk0eYd5NL5w+Cf8AR7I+Z5P8NN+FfQmHI4RR0fUZ/SEQvJ6rHUfuRvafO36N5HzPK/h5vwqL+GsnuxMof/Xm+5fRXNK1HNe4leZ82fo3mfM8r+Hl/CnPDeZ8zyv4eX8K+kSmQjR87M4ay9v/AAuT7R5PN+FTHDuWOmLlCulY8wr3eavocFJEUzG3zPBMHhHMlLh2MkNC/wBZBkgPs86qM2fG1p/+HmZQJdDyHmj9osDwA7KwvaE9LEpZG+JV8vsbSilyjwLL4Zyo3lnk0s2yqlbBkGN1gHzSWA+zp3KudCyuvkeTfyvJ5r/pX0LSVIiySrkw4qz53l4ey3NP7Jk2OY/Z5vwqseHc0mziZZPtx5fuX0lSaliTt2aSo+bTw3mfM8r+Hl/CpjhzL+Z5X8PN9y+jVIFVZGfOQ4cyvmeV/DS/cixcOZRc0HGyWAkNc840xDATRJ5d3VfQ9pK9zJR51j/k5xIw0vdPkGrdbZGN+gNaD8Sg65ouEzHeyHByZJqPZyR40/I9x3V0+lelpwEh+Ek5KUsk3XnX7IYWelSivl/bPnP8xZndhZX8PL9yqZeLNAQJoZIN17BLG5m8DrVgX1X0yGHwK80/KriOdJju2Oe2OOXe4Cwy3tq/DofgnrF1j9yPJCPYkQVrU0dwUXNaeVK9pdoygpteQE8se0oZWSqsRNojY0MKxG9WinxyIMWvBw3K9odbG33Em/5LKMoC18XimSNgbta6u+kLLvr1BvTdFt9ay2ApAIYcn3rvI800BzGd6qFgcC09Hiv3T3H40rc+Uyqc8fFZxzmDoSfcEHI4p8sZxKTXYzHNIJB6jkVJr6aR8qvsKJlyB7twBF+lfj4oC5z4bSOkuVya78Zm0O6WB/JAETCaLwwH0jV17a70KaQva1oUDCQDY7k1kkm/VQvCLXdn0zjNHZR8/UZ/SEVoQcT/AMqP9xn9IRaSgyZUfE2K6fsGzxl1R7H9pH2cr3vcwRtO6y+2GxXLkiatr0GK5jJXtD5HxM7IOZ2jGyPLRIQXCmAg2e6lQxuDYY8w5jXO7V73ve3bH2bmFoAYGgUKIBBFEm7JReIeFIs8s7Vzm9kH7Nobe8imvLqs1zNXRvmFXJDSOpQiJspljbE/bsmL2iN9mhTiaNnoquja5DmRh8LwSWte+ElvbQh11vaCaJo96Lm6S2bGdjF2wPj7LeGRkt5VuDSKB69AKvlSDoXD8WCx8cN7HvL2NdRMQIHmbqsi7PMnqoyAsbijFlmMLZoyajcx4kjMcxeXAMYQ6y4FhsVy5I2o8QY+M9jJHtD5HxxbA5m+IPJAkcCRTBRsqhh8HQw5Zy2ud2r3SOe3bGIy1wAawNAobdtgiibNkonEHCsWc5jpHOYYmv7LaG22Q1teTVmqPImjfRUQ0sjWII4mzOljEcldjKXtDJiWkhrSTRJANDvUdI1uDJjbLG8EbWSvZuaZIQ5thrwCQDXdaHqejMyMZ2M47GvaGOe1kdtAq6BFAkWLAFXypNoehR4URhjss3vexrg22NJsM3AW4CzRJJ59VZRLE4qxJ5nQxvY5zCwMduj2ZO5hf+rpxLqAN8uRCbUuJ8aCRkb3sY97wx7d8Y8ntjnh8lkENIaefuVTSeDYsfIdkMcTJL2na22MMfufbaAHm7RY5Vd80te4LjzZWTPc5joW1DtbH5jw8O3mwdxoAU6xRPK1nhGuWaGVq8MUImfIwRyDdC/c0Ca2FwDCSASQCRz5qOmazDkwiWN7S3Y2V7dzd8O5gdtkAJAIB5i+Slq2iMy4HY7vMY/aC4NYS1oItosULAIsURfJLRtAZhw9izzow57mhwbbWlxIYSBZABqzZV2VRVwuJsbImfEyVjnsc1jPPjIyrjElx0SXAA8zQogpZ3EuNjytifKwPe4se3fGPJf1ZkDpLILQQORrnYQNH4QhxJ3zsc4vlD+23Njp5LyQ4ADzKBIptAjqm1zg+HMmZO97mPia3sdrY6Y8PDi8207yQAKdYAvkoQvz5pEuM1haWZBk3O67miMuBB+C0AsvOZ+04lDkHTdByaOxIHuWkoQkSpNdRQ04ChA7cgd4XD/lC4ibilgLS908bgwCtvmnnd93nBdoxlrjuN+GPLJouZHZRP6V6zv+1L51j2PqduP3Qxp3LqJxq/P4Hie5xSDXLu/0KDZKc47R6vrH6e5dHj8Bwll7Bfte770PJ6Qwx5bDf4+UVcpJfn9rPIvJ3HqmdiGl6NqnCMbL2nZ4d/8ANcVONji09QdqNhzwyr1TGbSyxJSfKfiYzm0U4Ks5DQeiqEIwoMSn2qKmHKELLtRkPrV7ggOkcerifpWxofDz8uXs2nbytzj3DoulyvyZSMje9ri8xgnaW+lXOgryZlGW2cufM1jwOUd0Fx+RwFJwr7cUIogaEysLFutEzmMvlSERRWtbB4LOyAN5pZyQpGoT3MfHdTwtLLnaG37FkA80UW/ktY8jUXFGZ402mz6awz+rj/cZ/SEdx9i+cfL8kAftGRVf+9L96calk/OMj66X70LpSN70fRjUSmr53fLmNbudLlBvyjNLX9SCNSyPnGR9fL96ixN9mactvDR9FOHPkmXz0zOyXdMjJPumlP8AqmOdkD/E5H10v4lfSZW5H0KQmpfPR1DI+c5H18v4lVn1XJb/AInI+uk+9ZlBotOz6PCla+aRreT85yPrpPvTfnvK+c5H10n3rBZ9NRvpSMoXzXHqeUf8TkfXS/eruFPlSvDRkZHP/Pl+9W4cWy4zt7V3PoVslKRl9i8jg4UyntvyvJ/d7WT8Sq5nD+WwgDJyHX6xnl/EllnxN1uHPwmb3HsJKal5hi8KzvbZy8q/Dt5PxKrncP5UQtuVkGvVM0v4lFqcTdbiPRZf6z1mk1LwSXPnaS0zzgj/ADpfxKrPqOQBYyZ/r5fvTO3ixN8OmfQlKQXzUdayfnOR9dJ96f8APeT85yPrpfvWSH0ux1FY2vai2KQbqG+Lzb9jivn8a3lfOcj66T708mQ+ajI+SYj0e0e5+0HrVk0g58PWg4N9/uExZFjkpSV1/fM9I1niJgO9j27m+c1u4ech4/5SI2toiS/CgR9Btefx410u203QI2xguaHkjdzSOTS4ccUp2zs4c09VxCKSXv5+zKufxwJQQyN9nvdQr4ErkZSXuLj1JXYZWhRNkDgKHrR9y2sPHYGig34BbhlxYY/6aNz0mbN6uSSSXakeajGd4GvcoHG9i9J1IDYbAXCZcjQ414prDm6nhQhq9GsFU7sy5IKQaV+WQFU3nmmDns7HhXPGLlMe4Ha62ur1brnX0L0/M4wh2EMEjyR0axx+jouA4RjjMpLwCeW2/VXo7OzAHJqDr9iycp9uf7QfQQcsSlLnl15fqeO52mzbnyGJ8bXku59GgkmvtWa/CJ717hlvjLD6JFc+QXlOpsY2d4ZQb6rR0b7Am9LnWe01VCmt07wJZE+78e5zr9Od4oL8QgG+q3CEKaOwmXhihKOeXic6EWB9OTTsooYKUT2se7o1XZIpLFzA2Rrj0BG73LOHNWWYvJGcpT7AVGMDtsnV4ezcd7Xh7drWf2XHiQIfkxTiArGPG4XQXPm6zTfgdrwU+MtkFjtAeV1e32IHGYYHsIreQe1r1vAlcoxrmm2kgj1gSCncHONuJJ+USSVhYH1epYx+MX4boV+f8C3IeQLCnsT7Uw1aEU6M0spRC0JIVSe2ilpRoOnZagmoLS0nVRDM156ei5YVqTG2o3a2sqMdslNd0e06fxDC5lh7enygszXOIo2cw5rjY83cD715pDiEkAdSuhweFxKac838oequZLRwxvdKTOzh1k8rfTir99/Q7jSuLcdzQe0YPEOcA74FD1XiOAgntGe4OBKwWcEQ97nO9vRL9CYjzDnNA69DuS3SwKVqT+Q7GGZPdtjfx+n8nI5+X2khcOiqE2u+HBkFX5/x/sgS8JQgWC74roR1ePsIS9G5pyttfP8Ag4N0SE5lLo9Q0wRHruHqrHyIx3JhSUlaEMmKWOW2XcoBWopKVctpS3KwMlfBp4uQA4Wu007VvMDXC69Fw/1XmxerMeXIBQkcB7CUvnw9VD+j1P4fwOr1XVXvfcfIM8e9VXcVyxgNDWX7bXPHcepJ95JSEaqOnilTVhJ6/K25RdWaOZxJNMKcWtH/ACgj+ZWUZCUXsk/ZI8YKKqKoTyZZ5Hc3ZXspUrPZJuyW6BFqLVXMNtcWH5QKM/iKY9ZX/ErEDVIMKK5tgowUeE38zUOuyH/1JP8AqP3oP5xKpiB3yT8CpnGd12u+BUU2iPGpdy0NQRBnWs4MThi2pyBvFEnlPs2qoVlzOSA4IUruwse1E4Xc1sQUQsNpWniyIuGQHPG0aAjCkIgmY9E3JhiLsgYQm7EIzAXGguj0/hYyAFxItCyZY41cmGw4MuZ1jVnKGFQdCuyzeDXMFsJPvXMTwuY4tcKI9VZx5oZF6rN5sGbD7a+3zKLouSoZEVLXKrZEdq5K0Zx5GmYhRoHJp46QwUt2Y93RqQZIa4HwXaaTqLCQdw5jx9Fec7ypNJQ80OqqD6XM9PK0rPXvznEORe0e8hDGrxDkZGC/R84ecvKhGSpCApP8D/2Og/S6/wCH6/wepu1aFg86Rjfe4KlPrMJadsjHe5wXnQgKmICotCl4sn+ZrtBfP+DT1fUg8003Xesh5JRhAVIY6ejDaqRys2p6ktzKJjKQhWh2C0NL0wSP59P5qS9VWzOJvJNQj3Zgx4pJoAn3C1fj0eXr2T/+kr0vTNOaAA1ob7gttmG2uYXLyekNrpRO3/j4Q9uTvyR46cB7erSPeEMsXqepaXGQTtXBaxiiJ3LomtPqll4FtTpOnDfF2jJ2pbE/ahMZU8kczcNsTUomZQ7VQsD2a6PQNOYWh7hZJP2Fc26Ramkaz2Pmu6Xua75PirzezUTenaU05HfxaREW7to7t30qeVpkbRyaFgs4tY1tbh8VGbjCNzaLua5e3JfZneWbCl3Ri6/gMjka5nISAu2/JI6rJ2hH1XVO3eCOg81qz+0XVxyqKTPPZ0pZG4di0QFTmCn2qG8qSlZmEWiAVnHeqiLG7msRdM1JWjbgerFrNx5Ffa5OJ2jnTjTLmnPAlbfS16pprAWivALyAGua63QeJtgDX93rf2XO12GWSNx8DqejM0Y7scnV9mehytFdFxXFumB8ZkAp8fPd4jvBXQDVGvbYK5ziHVWiNzQQSRtXL0qnHIqOxkxJYJ9XtX/hw1pnttOE69GeRM3IiVB7aW1My1mzxpeaHcM74KqsQhVSEaJ6Gg0uxqQxikYRBU4pkfyhETE5RdhuzCVBVjkKByFLKUGy2SFEvCpmZQdKq3IIsTLrpQtDSNQDDRXPmVR7ZDmlJUM4E8U1NHrej5zTysLbOQ2uoXhseoPYQWuc0j0eZW3FxvM0UWtkPyrIXGzaCbdw5O9HW4cnM+H8/wCf0PRM/MaGnmvN9dztz6CDm8VyyitrWe6yftWI+UuNk80zpNNLFzIBrNXjnDp4+wcyqBlVcuTEro2cqgxkTb0JPtUIOUySS0UhwnpJJQgtqW1JJREJBqW1JJXRVkS1MCnSVFlmCRXo5kkkWLYvkighmUTKnSW7A7USbkkdHV7iQk7IJ6kn3m0klVl14CEyQmSSUtmdqEZFUmKZJZl2CYlyUpGobSnSS44EEin2qSSuzNIiZlEyJklk0LtFHckkoWLcmtJJQiGSSSUIJNaSSsoSSSShCTQpbUklaIf/2Q==' className="card-img center-text" id='passwordPic' alt="..."/>
                        </div>

                        <br></br>

                        <a href="https://colin-whitcomb.github.io/password-generator/" target="_blank" className='text-center'>
                            <button className="btn btn-dark">Deployed Link</button>
                        </a>
                        <a href="https://github.com/Colin-Whitcomb/password-generator" target="_blank" className='text-center ml-1'>
                            <button className="btn btn-dark">GitHub</button>
                        </a>
                </div>
            <br></br>
            {/*  */}

                  {/* NT */}
                  <div class="col-12 col-md-6 col-lg-4 cardDiv">
                    <p><span class='extraWords'><b>Note Taker</b></span> is an app that allows users to save and delete notes. Great for to-do lists!</p>
                               
                        <div class="card bg-dark text-white">
                            <img src='https://images.pexels.com/photos/7103/writing-notes-idea-conference.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500' className="card-img center-text" id='noteTakerPic' alt="..."/>
                        </div>

                        <br></br>

                        <a href="https://boiling-eyrie-32722.herokuapp.com/" target="_blank" className='text-center'>
                            <button className="btn btn-dark">Deployed Link</button>
                        </a>
                        <a href="https://github.com/Colin-Whitcomb/note_taker" target="_blank" className='text-center ml-1'>
                            <button className="btn btn-dark">GitHub</button>
                        </a>
                </div>
            <br></br>
            {/*  */}
           
              {/* ET */}
              <div class="col-12 col-md-6 col-lg-4 cardDiv">
                    <p><span class='extraWords'><b>Employee Tracker</b></span> allows the user to update and mangage employee details!</p>
                               
                        <div class="card bg-dark text-white">
                            <img src='https://images.pexels.com/photos/3321797/pexels-photo-3321797.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' className="card-img center-text" id='employeeTrackerPic' alt="..."/>
                        </div>

                        <br></br>

                        <a href="https://github.com/Colin-Whitcomb/Employee_Tracker" target="_blank" className='text-center ml-1'>
                            <button className="btn btn-dark">GitHub</button>
                        </a>
                      
                </div>
            <br></br>
            {/*  */}

             </div>

             <br></br>     <br></br>     <br></br>     <br></br>
        </div>
    )
}

export default HomeworkCards;