"@use client"

export async function Data() {
    const data = ["Data 1", "Data 2", "Data 3"];
    return new Promise(resolve => setTimeout(resolve, 3000)).then(() => data);
}