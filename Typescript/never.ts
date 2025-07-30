type Shape =
    | { kind: 'circle'; radius: number }
    | { kind: 'square'; side: number }
    | { kind: 'rectangle'; width: number; height: number }
    | { kind: 'rhombus'; width: number; height: number };


function area(shape: Shape): number {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius ** 2;
        case 'square':
            return shape.side ** 2;
        case 'rectangle':
            return shape.width * shape.height;
        default:
            // This should never happen if we’ve covered all cases!
            const _exhaustiveCheck: never = shape;
            throw new Error(`Unhandled shape: ${JSON.stringify(shape)}`);
    }
}