export class Building {
}

export class Floor {
    floorId: string;
    auditoriumId: string;
    auditoriumRows: AuditoriumRows;
    seatInfos: SeatInfo[];
    active: boolean;
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
    empty: boolean;
    booked: boolean
    eventId: string;
}