const cubes = [];

exports.getAll = () => cubes.slice();

exports.create = (cubeData) => {
    const newCube = {
        id: cubeData.length + 1,
        ...cubeData,
    };

    cubes.push(newCube);

    return newCube;
}