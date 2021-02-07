import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {useSelector,useDispatch} from "react-redux"
import * as actions from "../../Actions/ActonsType"

const TaskForm = ()=> {
  const open = useSelector(state=>state.formStatus)
  const dispatch = useDispatch()
  const handleClose = () => {
    dispatch(actions.closeForm())
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Thêm công việc</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Để thêm công việc mới, vui lòng nhập đầy đủ thông tin bên dưới
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Title"
            type="email"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            label="Description"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Lưu
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default TaskForm;