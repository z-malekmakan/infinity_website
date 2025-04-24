export interface Ichildren{
    children: React.ReactNode;
}

export interface IOpenHamburger{
    isOpen : boolean;
    toggle : ()=>void;
}

export interface IOpenSidebar{
    isOpen : boolean; 
}

export interface ICourseItem {
    id: string,
    title: string,
    description: string,
    price: number
}

export interface Ithemecontext {
    theme : string;
    setTheme : (theme : string)=>void;
    toggleTheme : ()=>void
}