import {
    ModalClose,
    ModalDialog,
    DialogContent,
    DialogTitle,
    FormControl,
    FormLabel,
    Input,
    Modal,
    Stack,
    Typography,
    Button,
    Divider,
    Grid,
    Textarea,
  } from "@mui/joy";
  import * as yup from "yup";
import { useInsertBlog } from "../../hooks/useInsertBlog";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { globalState } from "../../state/global/global.atom";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormHelperText } from "@mui/material";
import { useRef } from "react";
import { useGetAllBlogs } from "../../hooks/useGetAllBlogs";

  const schema = yup.object({
    title: yup.string().required("Title is required"),
    hero_image: yup.mixed().required("Hero is required"),
    tags: yup.string().required("Tags is required"),
    content: yup.string().required("Content is required"),
    description: yup.string().required("Short Desc is required"),
  })


  export const ModalAddBlog = ({ open, setOpen }) => {
    const [global, setGlobal] = useRecoilState(globalState);
    const navigate = useNavigate();
    const {error,loading, insertBlog } = useInsertBlog();
    

    const {
      control,
      handleSubmit,
      getValues,
      formState: { errors },
    } = useForm({
      resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
      insertBlog(data, ()=>{
      });

      if (!error) {
        setOpen(false);
        
      } else {
        console.log("Insert failed.");
      }
    };
    
    return (
      <Modal open={open} onClose={setOpen}>
        <ModalDialog
          layout="fullscreen"
          sx={{
            overflowX: "hidden !important",
            boxShadow: "lg",
            borderRadius: "xl",
            p: 3,
            m:"10px",
          }}
        >
          {/* Title Section */}
          <DialogTitle>
            <Typography
              level="h4"
              sx={{
                fontWeight: "bold",
                mb: 1,
                color: "#333",
              }}
            >
              Add New Blog
            </Typography>
            <ModalClose
              sx={{
                position: "absolute",
                top: "16px",
                right: "16px",
                color: "#888",
                ":hover": { color: "#000" },
              }}
            />
          </DialogTitle>
  
          <Divider sx={{ mb: 3 }} />
  
          {/* Content Section */}
          <DialogContent sx={{overflowX:"hidden"}}>
            <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
            <Grid container spacing={3}>
              {/* Title Input */}
              <Grid xs={12} lg={6}>
                <Controller
                  name="title"
                  control={control}
                  render={({ field,fieldState }) => (
                    <FormControl
                      error={!!fieldState.error}
                      
                    >
                      <FormLabel
                        sx={{
                          fontSize: "1rem",
                          fontWeight: "500",
                          color: "#444",
                        }}
                      >
                        Blog Title
                      </FormLabel>
                      <Input
                      
                        error={!!fieldState.error}
                        placeholder="Enter the title of your blog"
                        sx={{
                          borderRadius: "md",
                          borderColor: fieldState.error ? "#d32f2f" : "#ccc",
                          ":focus-within": { borderColor: "#55b76b" },
                        }}
                        {...field}
                      />

                    {fieldState.error && (
                    <FormHelperText error>{fieldState.error.message}</FormHelperText>
                  )}
                    </FormControl>
                  )}
                >
                </Controller>
              </Grid>
  
              {/* Hero Image Input */}
              <Grid xs={12} lg={6}>
                <Controller
                  name="hero_image"
                  control={control}
                  render={({ field,fieldState }) => (
                    <FormControl
                      error={!!fieldState.error}
                    >
                      <FormLabel
                        sx={{
                          fontSize: "1rem",
                          fontWeight: "500",
                          color: "#444",
                        }}
                      >
                        Hero Image
                      </FormLabel>
                      <Input
                      onClick={()=>{
                        console.log("clicked")
                      }
                      }
                        onChange={(e) => {
                          field.onChange(e.target.files[0]);
                        }}
                        type="file"
                        sx={{
                          borderRadius: "md",
                          borderColor: fieldState.error ? "#d32f2f" : "#ccc",
                          ":focus-within": { borderColor: "#55b76b" },
                        }}
                        // {...field}
                      />
                      {fieldState.error && (
                        <FormHelperText error>{fieldState.error.message}</FormHelperText>
                      )}
                    </FormControl>
                  )}
                >

                </Controller>
              </Grid>
  
              {/* Tags Input */}
              <Grid xs={12} lg={6}>
                <Controller
                  name="tags"
                  control={control}
                  render={({ field,fieldState }) => (
                    <FormControl
                      error={!!fieldState.error}
                    >
                      <FormLabel
                        sx={{
                          fontSize: "1rem",
                          fontWeight: "500",
                          color: "#444",
                        }}
                      >
                        Tags
                      </FormLabel>
                      <Input
                        placeholder="Add tags separated by commas"
                        sx={{
                          borderRadius: "md",
                          borderColor: fieldState.error ? "#d32f2f" : "#ccc",
                          ":focus-within": { borderColor: "#55b76b" },
                        }}
                        {...field}
                      />
                      {fieldState.error && (
                        <FormHelperText error>{fieldState.error.message}</FormHelperText>
                      )}
                    </FormControl>
                  )}
                ></Controller>
              </Grid>
              
              
              {/* Desc Input */}
              <Grid xs={12} lg={6}>
                <Controller
                  name="description"
                  control={control}
                  render={({ field,fieldState }) => (
                    <FormControl
                      error={!!fieldState.error}
                    >
                      <FormLabel
                        sx={{
                          fontSize: "1rem",
                          fontWeight: "500",
                          color: "#444",
                        }}
                      >
                        Description
                      </FormLabel>
                      <Input
                        placeholder="Short Description"
                        sx={{
                          borderRadius: "md",
                          borderColor: fieldState.error ? "#d32f2f" : "#ccc",
                          ":focus-within": { borderColor: "#55b76b" },
                        }}
                        {...field}
                      />
                      {fieldState.error && (
                        <FormHelperText error>{fieldState.error.message}</FormHelperText>
                      )}
                    </FormControl>
                  )}
                ></Controller>
              </Grid>
  
              {/* Content Input */}
              <Grid xs={12}>
                <Controller
                  name="content"
                  control={control}
                  render={({ field,fieldState }) => (
                    <FormControl
                      error={!!fieldState.error}
                    >
                      <FormLabel
                        sx={{
                          fontSize: "1rem",
                          fontWeight: "500",
                          color: "#444",
                        }}
                      >
                        Blog Content
                      </FormLabel>
                      <Textarea
                        minRows={8}
                        placeholder="Write your blog content here..."
                        sx={{
                          borderRadius: "md",
                          borderColor: fieldState.error ? "#d32f2f" : "#ccc",
                          
                        }}
                        {...field}
                      />
                      {fieldState.error && (
                        <FormHelperText error>{fieldState.error.message}</FormHelperText>
                      )}
                    </FormControl>
                  )}
                ></Controller>
              </Grid>
  
              {/* Buttons */}
              <Grid xs={12}>
                <Stack direction="row" justifyContent="flex-end" spacing={2}>
                  <Button
                    variant="soft"
                    color="neutral"
                    onClick={setOpen}
                    sx={{
                      borderRadius: "md",
                      bgcolor: "#e0e0e0",
                      ":hover": { bgcolor: "#d6d6d6" },
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    loading={loading}
                    type="submit"
                    variant="solid"
                    sx={{
                      borderRadius: "md",
                      bgcolor: "#55b76b",
                      ":hover": { bgcolor: "#48a963" },
                    }}
                  >
                    Submit
                  </Button>
                </Stack>
              </Grid>
            </Grid>
            </form>
          </DialogContent>
        </ModalDialog>
      </Modal>
    );
  };
  