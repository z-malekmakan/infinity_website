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