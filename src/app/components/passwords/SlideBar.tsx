interface IPropsSlideBar {
    value : number
    changeValue: (value: number) => void
}
export const SlideBar = ({value, changeValue}: IPropsSlideBar) => {
    return (
        <div>
            <input 
            className="w-full" 
            type="range" 
            value={value} 
            onChange={e => changeValue(Number(e.target.value))}
            min={5}
            max={30}
            />

        </div>
    )
}