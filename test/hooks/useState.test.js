
import { renderHook } from '@testing-library/react';
import { useState } from 'react';


describe('Pruebas en el useState', () => {

    test('debe de devolver el estado ', () => {

        const { result } = renderHook(() => useState("hola"))
        console.log(result)

        expect(result.current).toEqual([
            'hola',
            expect.any(Function)
        ])

    });

});