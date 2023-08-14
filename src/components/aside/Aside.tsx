
import styles from './Aside.module.css';
import headpic from"../../image/headpic.jpg";

export default function Aside(){
    return(
        <div className={styles['container']}>
            <div className={styles['headtop']}>
                <div className={ styles['headpic'] }>
                    <img src={headpic} alt="" />
                </div>
                <div className={styles['names']}>小赵同学</div>
                <div className={ styles['titles'] }>会者定期 一期一祁</div>

            </div>
            <div className={ styles['box'] }>
                <div>首页</div>
                <div>个人介绍</div>
                <div>作品展示</div>
            </div>
            
        </div>
    )
}