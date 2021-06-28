// import Link from 'next/link'

export default function Main() {
    return (
        <nav>
            <form>
                <label>location</label>
                <input name="location" type="text" placeholder="parcalona" /> <br />
                <label>Min Cst PerHour </label>
                <input name="Min-CST" type="text" placeholder="1" />
                <label>Max CST PerHour </label>
                <input name="max-CST" type="text" placeholder="2" />
                <label>AVG cookies </label>
                <input name="avg-CST" type="text" placeholder="1.2" />
                <button name="Create" type="submit">Create</button>
            </form>
            

            <style jsx>{`
                a{
                    margin-right: 5px;
                    color: green;
                }
            `}
            </style>

        </nav>
    )
}