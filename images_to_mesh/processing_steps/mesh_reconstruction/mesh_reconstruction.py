import os
from typing import List

import images_to_mesh.processing_steps.mesh_reconstruction.poisson_reconstruction as spsr
from images_to_mesh.processing_steps.mesh_reconstruction.mesh_loader import GeneralMeshLoader
from images_to_mesh.processing_steps.erros import ReconstructionError

def process_clouds(file: str) -> str:
    print(f"Got the following result from job 1:\n{file}", flush=True)

    file = "/usr/src/app/" + file

    dirname = str(os.path.dirname(file))
    if dirname.find("step1") != -1:
        dirname = dirname.replace("step1", "step2")
    else:
        raise ReconstructionError("Invalid input path. Must contain 'step1'.")

    if not os.path.exists(dirname):
        os.makedirs(dirname)

    filename = os.path.basename(file)
    out = "{0}/{1}_{3}{2}".format(dirname, *os.path.splitext(filename) + ("out",))
    spsr.reconstruct(GeneralMeshLoader(file), out)

    return out
