export class SystemContext {
    private static mflg = false;
    public static get isManager() {
        return this.mflg;
    }
    public static set isManager(v: boolean) {
        this.mflg = v;
    }
}