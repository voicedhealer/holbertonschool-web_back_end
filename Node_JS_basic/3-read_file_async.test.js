const fs = require('fs').promises;
const countStudents = require('./3-read_file_async');

jest.mock('fs', () => ({
    promises: {
        readFile: jest.fn(),
    },
}));

describe('countStudents', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('prints correct output for valid CSV file', async () => {
        const csvData = [
            'firstname,lastname,age,field',
            'John,Doe,20,CS',
            'Jane,Smith,22,CS',
            'Alice,Brown,21,SWE',
            'Bob,White,23,SWE',
        ].join('\n');

        fs.readFile.mockResolvedValue(csvData);

        const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

        await countStudents('fake_path');

        expect(logSpy).toHaveBeenCalledWith('Number of students: 4');
        expect(logSpy).toHaveBeenCalledWith(
            'Number of students in CS: 2. List: John, Jane'
        );
        expect(logSpy).toHaveBeenCalledWith(
            'Number of students in SWE: 2. List: Alice, Bob'
        );

        logSpy.mockRestore();
    });

    test('ignores empty lines and trims input', async () => {
        const csvData = `
firstname,lastname,age,field

John,Doe,20,CS

Jane,Smith,22,CS
`.trim();

        fs.readFile.mockResolvedValue(csvData);

        const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

        await countStudents('fake_path');

        expect(logSpy).toHaveBeenCalledWith('Number of students: 2');
        expect(logSpy).toHaveBeenCalledWith(
            'Number of students in CS: 2. List: John, Jane'
        );

        logSpy.mockRestore();
    });

    test('rejects with error if file cannot be read', async () => {
        fs.readFile.mockRejectedValue(new Error('File not found'));

        await expect(countStudents('bad_path')).rejects.toThrow('Cannot load the database');
    });
});