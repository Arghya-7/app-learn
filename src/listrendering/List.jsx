import style from './list.module.css';
function List(props){
    const types = props.types;
    const itemList = props.items;
    itemList.sort((a, b) => -1 * (a.calories - b.calories));

    // Get High colories item (calories >= 100)
    const highCaloriesItem = itemList
                                .filter(item => item.calories >= 100)
                                .map(item => {
                                    return <li key={item.id}>{item.name} <b>{item.calories}</b></li>;
                                });
    // Get low calories item (calories < 100) 
    const lowCaloriesItem = itemList.filter(item => item.calories < 100)
    .map(item => <li key={item.id}>{item.name} <b>{item.calories}</b></li>);

    return(<>
        <h2 className={style.highCaloryItemHeader}>Highcalories {types}</h2>
        <ol>{highCaloriesItem}</ol>
        <h2 className={style.lowCaloryItemHeader}>Lowcalories {types}</h2>
        <ol>{lowCaloriesItem}</ol>
    </>
    )
}

export default List;