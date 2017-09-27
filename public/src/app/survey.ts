export class Survey {
    public question: String = '';
    public creator: string = localStorage.getItem('name');
    public o1: String = '';
    public o2: String = '';
    public o3: String = '';
    public o4: String = '';
    public o1c: Number = 0;
    public o2c: Number = 0;
    public o3c: Number = 0;
    public o4c: Number = 0;
}