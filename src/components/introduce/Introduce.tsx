
import styles from "./Introduce.module.css";
import headpic from "../../image/headpic.jpg"

export default function Introduce(){
    return(
        <div className={ styles['count'] }>
            <div className={styles['headpic']}>
                <img src={ headpic } alt="" />
            </div>
            <div>
                <div className={ styles['name'] }>
                    <div>本名赵斌霞，于1999年10月29日出生于阳泉市平定县</div>
                </div>
                <div className={ styles['name'] }>2008年于旧关小学毕业</div>
                <div className={ styles['name'] }>2014年于旧关中学毕业</div>
                <div className={ styles['name'] }>2014年于旧关大专毕业</div>
                <div className={ styles['name'] }>2014年于旧关本科毕业</div>
                <div className={ styles['name'] }>2014年于旧关985毕业</div>
                <div className={ styles['name'] }>2014年于旧关博士毕业</div>
            </div>
        </div>
    )
}