import React, { Component } from 'react';

class EditableTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          milestone: 'Milestones',
          smilesAtOthers: '',
          headControl: '',
          sitting: '',
          walking: '',
          firstWords: '',
          twoWordPhrases: '',
          toiletControl: '',
          ageAtWhichAttained: 'Age at which attained',
        },
        {
          milestone: 'Normal Age range',
          smilesAtOthers: '(1 - 4 months)',
          headControl: '(2 - 4 months)',
          sitting: '(5 - 10 months)',
          walking: '(9 - 14 months)',
          firstWords: '(7 - 12 months)',
          twoWordPhrases: '(16 - 30 months)',
          toiletControl: '(3 - 4 years)',
          ageAtWhichAttained: '',
        },
        {
          milestone: 'Milestone 1',
          smilesAtOthers: '',
          headControl: '',
          sitting: '',
          walking: '',
          firstWords: '',
          twoWordPhrases: '',
          toiletControl: '',
          ageAtWhichAttained: '',
        },
        {
          milestone: 'Milestone 2',
          smilesAtOthers: '',
          headControl: '',
          sitting: '',
          walking: '',
          firstWords: '',
          twoWordPhrases: '',
          toiletControl: '',
          ageAtWhichAttained: '',
        },
        {
          milestone: 'Milestone 3',
          smilesAtOthers: '',
          headControl: '',
          sitting: '',
          walking: '',
          firstWords: '',
          twoWordPhrases: '',
          toiletControl: '',
          ageAtWhichAttained: '',
        },
        {
          milestone: 'Milestone 4',
          smilesAtOthers: '',
          headControl: '',
          sitting: '',
          walking: '',
          firstWords: '',
          twoWordPhrases: '',
          toiletControl: '',
          ageAtWhichAttained: '',
        },
        {
          milestone: 'Milestone 5',
          smilesAtOthers: '',
          headControl: '',
          sitting: '',
          walking: '',
          firstWords: '',
          twoWordPhrases: '',
          toiletControl: '',
          ageAtWhichAttained: '',
        },
        {
          milestone: 'Milestone 6',
          smilesAtOthers: '',
          headControl: '',
          sitting: '',
          walking: '',
          firstWords: '',
          twoWordPhrases: '',
          toiletControl: '',
          ageAtWhichAttained: '',
        },
        {
          milestone: 'Milestone 7',
          smilesAtOthers: '',
          headControl: '',
          sitting: '',
          walking: '',
          firstWords: '',
          twoWordPhrases: '',
          toiletControl: '',
          ageAtWhichAttained: '',
        },
        {
          milestone: 'Milestone 8',
          smilesAtOthers: '',
          headControl: '',
          sitting: '',
          walking: '',
          firstWords: '',
          twoWordPhrases: '',
          toiletControl: '',
          ageAtWhichAttained: '',
        },
      ],
    };
  }

  handleCellChange = (rowIndex, columnIndex, value) => {
    const { data } = this.state;
    data[rowIndex][columnIndex] = value;
    this.setState({ data });
  };

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Milestones</th>
            <th>Normal Age range</th>
            <th>Age at which attained</th>
          </tr>
        </thead>
        <tbody>
          {this.state.data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {Object.keys(row).map((column, columnIndex) => (
                <td key={columnIndex}>
                  {column === 'ageAtWhichAttained' ? (
                    <input
                      type="text"
                      value={row[column]}
                      onChange={(e) =>
                        this.handleCellChange(rowIndex, column, e.target.value)
                      }
                    />
                  ) : (
                    row[column]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default EditableTable;
