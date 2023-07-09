import * as React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { styled, Box } from "@mui/system";
import Modal from "@mui/base/Modal";
import Button from "@mui/material/Button";

import { clearItems, selectCart } from "../redux/slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";

export default function ModalUnstyled() {
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onClickClear = () => {
    dispatch(clearItems());
  };

  return (
    <div>
      <TriggerButton type="button" onClick={handleOpen}>
        Очистить корзину
      </TriggerButton>
      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        slots={{ backdrop: StyledBackdrop }}
      >
        <Box sx={style}>
          <div className="modal">
            <h3>Хотите очистить корзину?</h3>
            <div className="buttons">
            <button
                onClick={onClickClear}
                className="btn btn-confirm"
                variant="contained"
              >
                <span class="button-content">Очистить</span>
              </button>
              <button
                onClick={handleClose}
                className="btn btn-cancel"
                variant="contained"
              >
                <span class="button-content">Закрыть</span>
              </button>
              
            </div>
          </div>
        </Box>
      </StyledModal>
    </div>
  );
}

const Backdrop = React.forwardRef((props, ref) => {
  const { open, className, ...other } = props;
  return (
    <div
      className={clsx({ "MuiBackdrop-open": open }, className)}
      ref={ref}
      {...other}
    />
  );
});

Backdrop.propTypes = {
  className: PropTypes.string.isRequired,
  open: PropTypes.bool,
};

const blue = {
  200: "#99CCF3",
  400: "#3399FF",
  500: "#007FFF",
};

const grey = {
  50: "#f6f8fa",
  100: "#eaeef2",
  200: "#d0d7de",
  300: "#afb8c1",
  400: "#8c959f",
  500: "#6e7781",
  600: "#57606a",
  700: "#424a53",
  800: "#32383f",
  900: "#24292f",
};



const StyledModal = styled(Modal)`
  position: fixed;
  z-index: 1300;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = (theme) => ({
  width: '90%',
  borderRadius: "12px",
  padding: "16px 32px 24px 32px",
  backgroundColor: theme.palette.mode === "dark" ? "#0A1929" : "#F9F5F6",
  boxShadow: `0px 0px 0px 1px  ${
    theme.palette.mode === "dark" ? "#000" : "rgba(0, 0, 0, 0.05)"
  }`,
  [theme.breakpoints.up('sm')]: {
    width: 400,
  }

  
});

const TriggerButton = styled("button")(
  ({ theme }) => `
  font-size: 16px;
  border-radius: 30px;
  padding: 14px 20px;
  transition: .2s;
  background: transparent;
  border: 1px solid #dddddd;;
  color: #c3c3c3;

   &:hover {
     background: #111111;
     border-color: #111111;
     color: #fff;
   }

  &:focus-visible {
    border-color: ${blue[400]};
    outline: 3px solid ${theme.palette.mode === "dark" ? blue[500] : blue[200]};
  }
  `
);
