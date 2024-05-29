import { describe, it, expect } from 'vitest'
import {
    calculateCursorPosition,
    formatNumericValue,
    parseAndCleanNumericString,
} from './utils.ts'

describe('moneyInput:utils', () => {
    describe('calculateCursorPosition', () => {
        it('should return updated position when newValue is different from oldValue', () => {
            expect(calculateCursorPosition(5, '12345', '123456')).toBe(6)
        })

        it('should return same position when newValue is same as oldValue', () => {
            expect(calculateCursorPosition(5, '12345', '12345')).toBe(5)
        })

        it('should return current position when currentPosition is null', () => {
            expect(calculateCursorPosition(null, '12345', '123456')).toBe(null)
        })
    })

    describe('parseAndCleanNumericString', () => {
        it('should parse and clean numeric string correctly', () => {
            expect(parseAndCleanNumericString('123.45')).toBe(123.45)
            expect(parseAndCleanNumericString('123,123')).toBe(123123)
            expect(parseAndCleanNumericString('123,456.78')).toBe(123456.78)
        })

        it('should handle strings with leading and trailing non-numeric characters', () => {
            expect(parseAndCleanNumericString('abc123')).toBe(123)
            expect(parseAndCleanNumericString('123xyz')).toBe(123)
            expect(parseAndCleanNumericString('abc123xyz')).toBe(123)
        })
    })
    describe('formatNumericValue', () => {
        it('should format numeric value correctly', () => {
            expect(formatNumericValue('1234')).toBe('1,234')
            expect(formatNumericValue('1234.5')).toBe('1,234.5')
            expect(formatNumericValue('1234.56')).toBe('1,234.56')
        })

        it('should handle decimal point at start', () => {
            expect(formatNumericValue('.123')).toBe('123')
        })

        it('should handle decimal point at end', () => {
            expect(formatNumericValue('12.')).toBe('12.')
        })

        it('should remove double decimal point', () => {
            expect(formatNumericValue('12..')).toBe('12.')
        })

        it('should not allow decimal point before thousands separator', () => {
            expect(formatNumericValue('12.3,4')).toBe('123,4')
        })

        it('should handle values ending with zero in decimal part', () => {
            expect(formatNumericValue('1234.50')).toBe('1,234.50')
        })

        it('should return empty string for invalid input', () => {
            expect(formatNumericValue('abcxyz')).toBe('0')
        })

        it('should handle leading and trailing non-numeric characters', () => {
            expect(formatNumericValue('abc1234xyz')).toBe('1,234')
        })

        it('should handle numeric strings with spaces and special characters', () => {
            expect(formatNumericValue(' 1,234 ')).toBe('1,234')
            expect(formatNumericValue('!@#1,234$%^')).toBe('1,234')
        })

        it('should correctly format large numbers with commas', () => {
            expect(formatNumericValue('1000000')).toBe('1,000,000')
            expect(formatNumericValue('1000000.99')).toBe('1,000,000.99')
        })

        it('should correctly format numbers with 00 in decimal places', () => {
            expect(formatNumericValue('1234.0')).toBe('1,234.0')
            expect(formatNumericValue('1234.00')).toBe('1,234.00')
        })
    })
})
