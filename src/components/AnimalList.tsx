import type { AnimalOperationProps } from "../types/animal";

export default function AnimalList({animals, incrementAge, remove}:AnimalOperationProps) {
    return <table>
        <thead>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>age</th>
                <th/>
                <th/>
            </tr>
        </thead>
        <tbody>
            {animals().map(it => <tr key={it.id}>
                <td>{it.id}</td>
                <td>{it.name}</td>
                <td>{it.age}</td>
                <td><button onClick={()=>incrementAge(it.id)}>age up</button></td>
                <td><button onClick={()=>remove(it.id)}>remove</button></td>
            </tr>)}
        </tbody>
    </table>
}