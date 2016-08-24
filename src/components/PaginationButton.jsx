// Import React Libraries
import React from 'react';
// import radium from 'radium';

const PaginationButton = (props) => {
  const styles = {
    base: {
      color: '#A3A19E',
      border: '2px solid #A3A19E',
    },
    dots: {
      border: '3px solid #A3A19E',
    },
  };

  // render() {
  const dotElements = [];
  // Add loading class and the loading animation if it is loading now
  const isLoading = props.isLoading ? 'loading' : '';
  let i;

  // Generate the dots for the pagination button.
  // The number of the dots is determinated by the props.
  for (i = 0; i < props.dots; i++) {
    dotElements.push(
      <span
        id={`${props.id}__dot-row__element_${i}`}
        className={`${props.className}__dot-row__element ${isLoading}`}
        key={i}
        style={styles.dots}
      >
      </span>
    );
  }

  return (
    <button
      id={props.id}
      className={`${props.className}`}
      onClick={props.onClick}
      style={styles.base}
    >
      <span
        id={`${props.id}__dot-row`}
        className={`${props.className}__dot-row`}
      >
        {dotElements}
        <label
          id={`${props.id}__dot-row__number`}
          className={`${props.className}__dot-row__number`}
        >
          {props.label}
        </label>
      </span>
    </button>
  );
  // }
};

// class PaginationButton extends React.Component {
//   render() {
//     const dotElements = [];
//     // Add loading class and the loading animation if it is loading now
//     const isLoading = this.props.isLoading ? 'loading' : '';
//     let i;

//     // Generate the dots for the pagination button.
//     // The number of the dots is determinated by the props.
//     for (i = 0; i < this.props.dots; i++) {
//       dotElements.push(
//         <span
//           id={`${this.props.id}__dot-row__element_${i}`}
//           className={`${this.props.className}__dot-row__element ${isLoading}`}
//           key={i}
//           style={[
//             styles.dots,
//             this.props.dotStyle,
//           ]}
//         >
//         </span>
//       );
//     }

//     return (
//       <button
//         id={this.props.id}
//         className={`${this.props.className}`}
//         onClick={this.props.onClick}
//         style={[
//           styles.base,
//           this.props.style,
//         ]}
//       >
//         <span
//           id={`${this.props.id}__dot-row`}
//           className={`${this.props.className}__dot-row`}
//         >
//           {dotElements}
//           <label
//             id={`${this.props.id}__dot-row__number`}
//             className={`${this.props.className}__dot-row__number`}
//           >
//             {this.props.label}
//           </label>
//         </span>
//       </button>
//     );
//   }
// }

PaginationButton.propTypes = {
  id: React.PropTypes.string.isRequired,
  className: React.PropTypes.string.isRequired,
  name: React.PropTypes.string,
  label: React.PropTypes.string,
  lang: React.PropTypes.string,
  isLoading: React.PropTypes.bool.isRequired,
  dots: React.PropTypes.number,
  onClick: React.PropTypes.func,
  style: React.PropTypes.object,
  dotStyle: React.PropTypes.object,
};

PaginationButton.defaultProps = {
  id: 'PaginationButton',
  className: 'pagination-button',
  name: 'pagination button',
  label: 'Pagination Button',
  lang: 'en',
  dots: 3,
};

// Export the component
export default PaginationButton;
