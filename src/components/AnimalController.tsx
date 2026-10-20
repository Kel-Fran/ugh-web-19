import type { AnimalOperationProps } from "../types/animal";

export default function AnimalController({add}: AnimalOperationProps) {
    return <form onSubmit={e => {
        e.preventDefault();
        const fd = new FormData(e.target);
        add(fd.get("name")!.toString(), +fd.get("age")!.toString())
    }}><input type="text" name="name"/><input type="number" name="age"/><input type="submit"/></form>
}