import {
    mount
} from '@vue/test-utils'
// import {
//     nextTick
// } from 'vue/types/umd'
import Calculator from '../components/Calculator.vue'

describe('Calculator', () => {
    it('test first operand input value', () => {
        const wraper = mount(Calculator)
        const operand1 = wraper.find("input[id=one]")
        operand1.setValue('1')
        expect(wraper.vm.operand1).toBe(1)
    })

    it('test second operand input value', () => {
        const wraper = mount(Calculator)
        const operand2 = wraper.find("input[id=two]")
        operand2.element.value = "1"
        operand2.trigger('input')
        expect(wraper.vm.operand2).toBe(1)
    })

    it('Test sum', () => {
        const wraper = mount(Calculator)


        const operand1 = wraper.find("input[id=one]")
        operand1.setValue('5')
        expect(wraper.vm.operand1).toBe(5)


        const operand2 = wraper.find("input[id=two]")
        operand2.setValue('5')
        expect(wraper.vm.operand2).toBe(5)

        const sumBtn = wraper.find('button[name="+"]')
        sumBtn.trigger('click')

        expect(wraper.vm.result).toBe(10)

    })


    it('Test sub', () => {
        const wraper = mount(Calculator)

        const operand1 = wraper.find("input[id=one]")
        operand1.setValue('10')
        expect(wraper.vm.operand1).toBe(10)

        const operand2 = wraper.find("input[id=two]")
        operand2.setValue('5')
        expect(wraper.vm.operand2).toBe(5)

        const subBtn = wraper.find('button[name="-"]')
        subBtn.trigger('click')

        expect(wraper.vm.result).toBe(5)

    })

    it('Test mul', () => {
        const wraper = mount(Calculator)

        const operand1 = wraper.find("input[id=one]")
        operand1.setValue('2')
        expect(wraper.vm.operand1).toBe(2)

        const operand2 = wraper.find("input[id=two]")
        operand2.setValue('2')
        expect(wraper.vm.operand2).toBe(2)

        const mulBtn = wraper.find('button[name="*"]')
        mulBtn.trigger('click')

        expect(wraper.vm.result).toBe(4)

    })

    it('Test div', () => {
        const wraper = mount(Calculator)

        const operand1 = wraper.find("input[id=one]")
        operand1.setValue('10')
        expect(wraper.vm.operand1).toBe(10)

        const operand2 = wraper.find("input[id=two]")
        operand2.setValue('5')
        expect(wraper.vm.operand2).toBe(5)

        const divBtn = wraper.find('button[name="/"]')
        divBtn.trigger('click')

        expect(wraper.vm.result).toBe(2)

    })


    it('Test row', () => {
        const wraper = mount(Calculator)

        const operand1 = wraper.find("input[id=one]")
        operand1.setValue('2')
        expect(wraper.vm.operand1).toBe(2)

        const operand2 = wraper.find("input[id=two]")
        operand2.setValue('2')
        expect(wraper.vm.operand2).toBe(2)

        const rowBtn = wraper.find('button[name="Возведение в степень"]')
        rowBtn.trigger('click')

        expect(wraper.vm.result).toBe(4)

    })


    it('Test div2', () => {
        const wraper = mount(Calculator)

        const operand1 = wraper.find("input[id=one]")
        operand1.setValue('10')
        expect(wraper.vm.operand1).toBe(10)

        const operand2 = wraper.find("input[id=two]")
        operand2.setValue('5')
        expect(wraper.vm.operand2).toBe(5)

        const div2Btn = wraper.find('button[name="Целочисленное деление"]')
        div2Btn.trigger('click')

        expect(wraper.vm.result).toBe(2)

    })


    // it('Test keyboard', () => {
    //     const wraper = mount(Calculator)

    //     const operand1 = wraper.find("input[id=one]")
    //     operand1.setValue('')
    //     expect(wraper.vm.operand1).toBe('')

    //     const keyboardBtn = wraper.find('button[name="0"]')
    //     keyboardBtn.trigger('click')

    //     expect(wraper.vm.result).toBe(0)

    // })
    it('Test keyboard', () => {
        const wraper = mount(Calculator)

        const operand1 = wraper.find("input[id=one]")
        operand1.setValue('')
        expect(wraper.vm.operand1).toBe('')

        const keyboardBtn = wraper.find('button[name="1"]')
        keyboardBtn.trigger('click')

        expect(wraper.vm.result).toBe(1)

    })



    it('Test delLastDigit', () => {
        const wraper = mount(Calculator)

        const operand1 = wraper.find("input[id=one]")
        operand1.setValue('11')
        expect(wraper.vm.operand1).toBe(11)

        const delBtn = wraper.find('button [name=del]')
        delBtn.trigger('click')

        expect(wraper.vm.result).toBe(1)

    })
})