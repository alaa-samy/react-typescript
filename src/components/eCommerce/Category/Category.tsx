import styles from './Category.module.css'

const { category, categoryImg, categoryTitle } = styles;

function Category() {
    return (
        <div className={category}>
            <div className={categoryImg}>
                <img src="https://cdn-eu.dynamicyield.com/api/9876644/images/cfb357649428__hp-w12-22032022-h_m-men.jpg" alt="" />
            </div>  
            <div className={categoryTitle}>Title</div>  
        </div>
    )
}

export default Category