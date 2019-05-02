export class Building {
}

export class Floors {
    floorId: string;
    auditoriumId: string;
    auditoriumRows: AuditoriumRows;
    seatInfo: SeatInfo[];
}

export class AuditoriumRows {
    id: string;
    rowName: string;
    displayOrder: number;
    empty: boolean;
    active: boolean;
}

export class SeatInfo {
    seatNo: number;
    levelId: string;
    price: number;
    blockName: string;
    empty: string;
}